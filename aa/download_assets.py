import os
from glob import glob
from bs4 import BeautifulSoup
from tqdm.auto import tqdm
from urllib.parse import urlparse
import urllib3
import shutil
import sys

def not_null_filter(x):
    return x is not None

def internet_url_filter(x:str):
    internet_prefixes = ('http://', 'https://')
    return not_null_filter(x) and x.startswith(internet_prefixes)

def get_script_src(script_tag):
    return script_tag.get('src')

def get_link_src(link_tag):
    return link_tag.get('href')

def extract_html(html_file, target_dir):
    assets_urls = []

    soup = BeautifulSoup(open(html_file, encoding='utf-8'), 'html.parser')
    
    script_tags = soup.find_all('script')
    script_sources = filter(internet_url_filter, map(get_script_src, script_tags))
    assets_urls.extend(script_sources)

    link_tags = soup.find_all('link')
    link_sources = filter(internet_url_filter, map(get_link_src, link_tags))
    assets_urls.extend(link_sources)

    return assets_urls

def url_filename(url):
    return os.path.basename(urlparse(url).path)

def download_asset(url, target_dir):
    target_filename = url_filename(url)
    target_file_path = os.path.join(target_dir, target_filename)

    with urllib3.PoolManager() as c:
        with c.request('GET',url, preload_content=False) as resp, open(target_file_path, 'wb') as out_file:
            shutil.copyfileobj(resp, out_file)
            resp.release_conn()  


if __name__ == "__main__":
    highcharts_dir = os.path.abspath(os.path.dirname(__file__))
    target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), 'assets'))

    html_files = [y for x in os.walk(highcharts_dir) for y in glob(os.path.join(x[0], '*.htm'))]
    all_assets = set()
    for html_file in tqdm(html_files, desc="Extracting html files"):
        assets_urls = extract_html(html_file, target_dir)
        all_assets.update(assets_urls)
    
    print(f'Found total {len(all_assets)} assets')
    pd_desc_format = "Downloading {url}"
    pb = tqdm(desc=f'Downloading assets', total=len(all_assets))
    for asset_url in all_assets:
        try:
            pb.desc = pd_desc_format.format(url=asset_url)
            download_asset(asset_url, target_dir)
        except BaseException as ex:
            sys.stderr.write(f'Failed to download {asset_url}: {ex}')
        finally:
            pb.update(1)
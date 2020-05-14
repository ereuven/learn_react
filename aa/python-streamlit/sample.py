# https://towardsdatascience.com/how-to-write-web-apps-using-simple-python-for-data-scientists-a227a1a01582
# run: streamlit run .\sample.py

# Sample 1 #
# import streamlit as st
# import pandas as pd
# import matplotlib.pyplot as plt

# x = st.slider('x')
# st.write(x, 'squared is', x * x)

# st.line_chart({'x':i, f'x^{x}':i**x} for i in range(-100,100))

# plt.plot([(i, i**x) for i in range(-100, 100)])
# plt.xlabel('x')
# plt.ylabel(f'x^{x}')
# st.pyplot()

# displat_hist = st.radio('display histogram', ('yes', 'no'))
# if displat_hist == 'yes':
#     plt.hist([3,2,1,4,5,63])

# st.pyplot()

# Sample 2 #
# import streamlit as st
# import plotly.figure_factory as ff
# import numpy as np

# # Add histogram data
# x1 = np.random.randn(200) - 2
# x2 = np.random.randn(200)
# x3 = np.random.randn(200) + 2

# # Group data together
# hist_data = [x1, x2, x3]

# group_labels = ['Group 1', 'Group 2', 'Group 3']

# # Create distplot with custom bin_size
# fig = ff.create_distplot(hist_data, group_labels, bin_size=[.1, .25, .5])
# # Plot!
# st.plotly_chart(fig, use_container_width=True)

# Sample 3 #
# import pandas as pd
# import numpy as np
# import streamlit as st
# import pydeck as pdk

# df = pd.DataFrame(
#    np.random.randn(1000, 2) / [50, 50] + [37.76, -122.4],
#    columns=['lat', 'lon'])

# st.pydeck_chart(pdk.Deck(
#     map_style='mapbox://styles/mapbox/light-v9',
#     initial_view_state=pdk.ViewState(
#         latitude=37.76,
#         longitude=-122.4,
#         zoom=11,
#         pitch=50,
#     ),
#     layers=[
#         pdk.Layer(
#            'HexagonLayer',
#            data=df,
#            get_position='[lon, lat]',
#            radius=200,
#            elevation_scale=4,
#            elevation_range=[0, 1000],
#            pickable=True,
#            extruded=True,
#         ),
#         pdk.Layer(
#             'ScatterplotLayer',
#             data=df,
#             get_position='[lon, lat]',
#             get_color='[200, 30, 0, 160]',
#             get_radius=200,
#         ),
#     ],
# ))

# Sample 4 #
# import streamlit as st
# import pandas as pd
# import numpy as np
# import plotly_express as px

# df = pd.read_csv("football_data.csv")
# clubs = st.multiselect('Show Player for clubs?', df['Club'].unique())
# nationalities = st.multiselect('Show Player from Nationalities?', df['Nationality'].unique())
# new_df = df[(df['Club'].isin(clubs)) & (df['Nationality'].isin(nationalities))]
# st.write(new_df)
# # create figure using plotly express
# fig = px.scatter(new_df, x ='Overall',y='Age',color='Name')
# # Plot!
# st.plotly_chart(fig)

# Sample 5 #
import streamlit as st
import pandas as pd
import numpy as np
import plotly_express as px
import matplotlib.pyplot as plt
import networkx as nx

G = nx.grid_2d_graph(5, 5)  # 5x5 grid

# print the adjacency list
for line in nx.generate_adjlist(G):
    print(line)
# write edgelist to grid.edgelist
nx.write_edgelist(G, path="grid.edgelist", delimiter=":")
# read edgelist from grid.edgelist
H = nx.read_edgelist(path="grid.edgelist", delimiter=":")

nx.draw(H, with_labels=True)
st.pyplot()

df = st.cache(pd.read_csv)("football_data.csv")
clubs = st.sidebar.multiselect('Show Player for clubs?', df['Club'].unique())
nationalities = st.sidebar.multiselect('Show Player from Nationalities?', df['Nationality'].unique())
new_df = df[(df['Club'].isin(clubs)) & (df['Nationality'].isin(nationalities))]

# with radio select:
# nationalities = st.sidebar.radio('Show Player from Nationalities?', sorted(df['Nationality'].unique()))
# new_df = df[(df['Club'].isin(clubs)) & (df['Nationality']==nationalities)]

st.write(new_df)
# Create distplot with custom bin_size
fig = px.scatter(new_df, x ='Overall',y='Age',color='Name')
# Plot!
st.plotly_chart(fig)

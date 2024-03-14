# Filesystem Navigator UI
This UI component is an interactive **Filesystem Navigator UI** to enable folder-style navigation on web pages.

The intention is to display a dynamic, interactive UI component which, in a visually intuitive manner, makes it clear to the user:

 - which folders are open
 - which folders are empty
 - which folders contain other open (or closed) sub-folders

Not least, since it isn't possible to animate an element's `height` from `0` to `auto` via  CSS transitions alone, the UI component's script contains a function which animates the opening and closing of folders of arbitrary `height`.

_______

## Live Demo of the Filesystem Navigator UI

For a live demo of this styled, scripted UI component, see:

- <a href="https://rouninmedia.github.io/filesystem-navigator-ui/filesystem-navigator-ui.html" target="_blank">FileSystem Navigator UI</a>

_______

## Implementing the Code

In the example below, there are _three_ files:

 1. an **HTML** file containing the _markup_ / _structure_
 2. a **CSS** file containing the _styles_ / _presentation_
 3. a **JS** file containing the _interactivity_ / _behaviour_

### HTML:
```html
<ul class="webDirectory --open">
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder A</span>
    <ul class="webDirectory">
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AA</span>
        <ul class="webDirectory">
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AAA</span>
            <ul class="webDirectory">
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AAAA</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaa1.html</span></li>
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaa2.html</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AAAB</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AAABA</span>
                    <ul class="webDirectory">
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaba1.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaba2.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaba3.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaaba4.html</span></li>
                    </ul>
                  </li>
                  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder AAABB</span>
                    <ul class="webDirectory">
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaabb1.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaabb2.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaabb3.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaabb4.html</span></li>
                    </ul>
                  </li>
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaab1.html</span></li>
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaab2.html</span></li>
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaab3.html</span></li>
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aaab4.html</span></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa1.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa2.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa3.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa4.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa5.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa6.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">page-aa7.html</span></li>
        </ul>
      </li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a1.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a2.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a3.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a4.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a5.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a6.html</span></li>
    </ul>
  </li>
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder B</span>
    <ul class="webDirectory">
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-b1.html</span></li>
    </ul>
  </li>
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder C</span>
    <ul class="webDirectory">
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CA</span>
        <ul class="webDirectory">
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAA</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-caa1.html</span></li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAB</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-cab1.html</span></li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAC</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-cac1.html</span></li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAD</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-cad1.html</span></li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAE</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-cae1.html</span></li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CAF</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-caf1.html</span></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CB</span>
        <ul class="webDirectory"></ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CC</span>
        <ul class="webDirectory">
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder CCA</span>
            <ul class="webDirectory">
              <li class="webDirectoryFile"><span class="webDirectoryFileName">page-cca1.html</span></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder D</span>
    <ul class="webDirectory">
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-d1.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-d2.html</span></li>
    </ul>
  </li>
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder E</span>
    <ul class="webDirectory"></ul>
  </li>
  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">Folder F</span>
    <ul class="webDirectory">
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f1.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f2.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f3.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f4.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f5.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f6.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f7.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f8.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f9.html</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">page-f10.html</span></li>
   </ul>
  </li>
  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a1.html</span></li>
  <li class="webDirectoryFile"><span class="webDirectoryFileName">page-a2.html</span></li>
</ul>
```

### CSS:
```css
.webDirectory {
  width: 90%;
  height: 0;
  padding-left: 24px;
  line-height: clamp(18px, 3vw, 30px);
  white-space: nowrap;
  overflow: hidden;
}

.webDirectory.\--open {
  height: auto;
}

.webDirectoryFolder {
  margin-top: 12px;
  padding: 0 6px 6px 8px;
  font-weight: 900;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 12px;
  list-style-type: none;
}

.webDirectoryFolder:hover:not(:has(.webDirectoryFolder:hover, > .webDirectory:empty)) {
  background-color: rgba(127, 0, 0, 0.1);
  border: 2px dotted rgb(223, 0, 0);
}

.webDirectoryFolder:hover:not(:has(.webDirectoryFolder:hover, > .webDirectory:empty)):has(.webDirectory.\--transitioning),
.webDirectoryFolder:hover:has(> .webDirectory.\--open):not(:has(.webDirectoryFolder:hover, > .webDirectory:empty)),
.webDirectoryFolder:has(> .webDirectory.\--open):not(:has(.webDirectoryFolder:hover, .webDirectory .webDirectory.\--open)) {
  background-color: rgba(127, 0, 0, 0.1);
  border: 2px solid rgb(223, 0, 0);
}

.webDirectoryFolder:hover:has(> .webDirectory.\--open, > .webDirectory.\--transitioning):not(:has(.webDirectoryFolder:hover, > .webDirectory:empty)) .webDirectoryFolder:has(> .webDirectory.\--open):not(:has(.webDirectory .webDirectory.\--open)) {
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgba(0, 0, 0, 0);
}


.webDirectoryFolderName::before {
  content: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20lang=%22en-GB%22%20width=%2232%22%20height=%2232%22%20viewBox=%220%200%201440%201440%22%3E%3Ctitle%3EFolder%20Icon%3C/title%3E%3Cdefs%3E%3Cstyle%3E%3C!%5BCDATA%5B:root%7B--outerFolderColor:rgb(164,13,13);--innerFolderColor:rgb(222,40,37);%7Drect%7Bwidth:1440px;height:1440px;fill:rgb(0,0,0,0);%7Dpath:nth-of-type(1)%7Bstroke:var(--outerFolderColor);fill:var(--outerFolderColor);%7Dpath:nth-of-type(2)%7Bstroke:var(--innerFolderColor);fill:var(--innerFolderColor);%7D%5D%5D%3E%3C/style%3E%3C/defs%3E%3Crect/%3E%3Cpath%20d=%22m%20330.66667,173.89917%20c%204.95792,-0.65096%2010.81941,-0.56584%2016,-0.56584%205.22664,0%207.95569,0%2013.33333,0%2019.8938,0%2043.86926,0.5245%2064,2.44035%2038.36959,3.65161%2071.77096,6.07414%20108,12.11931%205.58138,0.93131%2012.09094,2.18164%2017.33333,3.33951%2036.77775,8.12313%2075.36483,16.93091%20108,36.23869%207.18343,4.24992%2016.89315,9.58797%2024,14.87655%204.13827,3.07942%206.93636,5.77685%2010.54631,9.65332%204.22632,4.53833%208.28206,10.0332%2011.53597,14.66561%206.71403,9.55843%2011.81372,18.35693%2025.91772,27.54012%206.97738,4.54297%2012.07219,6.82991%2016,8.78906%208.30046,4.14014%2016.26221,6.97298%2028,10.33748%204.81071,1.37891%2011.3947,2.75391%2016,3.84571%208.44572,2.00219%2016.85913,4.24479%2028,6.03499%208.02596,1.28971%2016.60572,1.53866%2025.33334,2.68514%203.64575,0.47892%207.1962,0.64583%2010.66666,0.99284%208.20858,0.8208%2015.60743,1.74731%2024,2.32202%204.21436,0.28857%209.11906,-0.05%2013.33334,0.23861%205.15787,0.35319%207.2985,1.13712%2013.33333,1.2089%2011.30591,0.13444%2029.15975,0.005%2040,0.005%204.21061,0%206.60246,-0.08%2010.66667,0.0195%203.88867,0.0952%208.1757,0.93262%2012,1.1945%209.92317,0.67952%2019.18685,0.68164%2029.33333,2.01847%203.82812,0.50431%208.1347,0.802%2012,1.33439%204.1514,0.57178%206.5693,0.93156%2010.6667,1.53809%2028.021,4.14795%2056.0754,9.23014%2082.6666,16.06787%2027.5725,7.09%2057.324,16.08195%2085.3334,30.86833%2018.253,9.6359%2037.1886,23.05769%2051.8807,37.74479%207.5442,7.54166%2016.3907,19.25993%2021.4371,27.88069%209.229,15.76563%2013.4471,27.85718%2017.7028,44%205.677,21.53451%209.1241,45.30998%2011.4197,69.33334%200.3881,4.06136%200.1109,6.46443%200.607,10.66666%200.7981,6.76001%200.6468,14.69458%201.5185,21.33334%200.535,4.0743%200.7459,6.41764%200.7664,10.66666%200.073,15.18824%200.071,35.01636%201.5608,50.66667%200.7051,7.40918%201.107,10.46444%201.107,18.66667%200,6.90364%200,10.24064%200,17.33333%200,6.39616%200,9.49333%200,16%200,18.30526%201.3333,37.5376%201.3333,56%200,27.98763%20-1.3333,56.09831%20-1.3333,84%200,4.3654%200,7.96208%200,12%200,8.77344%200.016,16.77474%200,26.66667%20-0.01,5.88248%20-0.5367,8.67439%20-1.107,14.66666%20-1.8995,19.95915%20-0.7521,41.21468%20-2.6667,61.33334%20-0.5795,6.08951%200.071,8.9209%20-0.607,14.66666%20-1.311,11.11068%20-1.584,23.50727%20-3.0535,34.66667%20-0.6339,4.8137%20-0.5203,7.3705%20-1.1317,12%20-0.965,7.307%20-1.5753,15.3204%20-2.4804,22.6667%20-1.5494,12.5755%20-3.6221,26.9689%20-5.5011,38.6666%20-3.5954,22.3839%20-8.3512,47.2856%20-14.8066,66.6667%20-3.5191,10.5657%20-11.6321,29.7178%20-21.9989,37.0391%20-8.8577,6.2555%20-15.9608,8.508%20-30.6471,12.6811%20-10.7753,3.0617%20-26.479,6.097%20-38.6667,7.9793%20-18.6831,2.8857%20-36.967,5.6687%20-56,8.0135%20-11.5238,1.4196%20-25.7895,2.8676%20-37.3333,4.3878%20-4.0399,0.532%20-6.4503,0.3897%20-10.6667,0.6852%20-16.7104,1.1712%20-35.4891,2.5358%20-52,4.107%20-3.591,0.3417%20-5.8422,0.9014%20-9.3333,1.0545%20-3.6666,0.1608%20-5.6604,-0.08%20-9.33337,0.1718%20-4.0048,0.2743%20-6.39339,0.9745%20-10.66666,1.1615%20-26.51823,1.1613%20-58.3291,4.0508%20-85.33334,4.0525%20-6.00293,4e-4%20-14.31754,-0.2697%20-20,0.1193%20-3.10026,0.2124%20-5.8046,0.8531%20-9.33333,1.0948%20-7.57642,0.5188%20-12.46362,0.1193%20-21.33333,0.1193%20-8.65194,0%20-11.20695,-0.4836%20-18.66667,0.2263%20-6.88363,0.6551%20-16.78768,1.107%20-24,1.107%20-8.04606,0%20-11.80168,0%20-20,0%20-8.19792,0%20-11.95435,-0.038%20-20,10e-4%20-28.24015,0.1362%20-56.96012,1.3323%20-85.33333,1.3323%20-19.76176,0%20-40.42672,-1.0953%20-60,-1.3282%20-7.38986,-0.088%20-10.86206,-0.01%20-18.66667,-0.01%20-8.99666,0%20-12.08724,0.089%20-20,-0.01%20-6.32007,-0.075%20-19.39136,-1.3282%20-25.33333,-1.3282%20-4.47209,0%20-6.81763,0%20-12,0%20-8.33863,0%20-11.45329,0%20-18.66667,0%20-6.18722,-0%20-9.45064,-0.4838%20-16,-1.107%20-33.16996,-3.1566%20-69.21383,-4.0532%20-102.66667,-4.2273%20-3.86832,-0.02%20-7.00118,-0.2853%20-10.66666,-0.7666%20-3.40633,-0.4472%20-5.71839,-0.531%20-9.33334,-0.5658%20-8.70988,-0.084%20-8.93644,-1.1019%20-18.66666,-1.3333%20-12.11601,-0.2883%20-33.54531,-3.0176%20-45.33334,-3.8817%20-7.13942,-0.5234%20-14.13139,-1.0488%20-21.33333,-2.0175%20-7.73037,-1.0399%20-16.40576,-1.783%20-24,-2.8735%20-34.29557,-4.9242%20-70.01607,-9.4868%20-101.33333,-18.464%20-13.2523,-3.7987%20-17.4704,-4.8385%20-26.54218,-14.1543%20-6.02209,-6.1841%20-10.6062,-16.0918%20-12.30865,-19.9424%20-5.85687,-13.2469%20-12.20709,-37.9341%20-15.70782,-58.6666%20-2.79002,-16.5235%20-5.11481,-35.3023%20-7.34053,-52%20-1.00444,-7.5354%20-1.58178,-16.2976%20-2.32716,-24%20-0.45103,-4.6608%20-0.94687,-7.2046%20-1.1214,-12%20-0.63111,-17.3409%20-3.82723,-35.58239%20-3.9856,-52.00003%20-0.055,-5.70207%20-0.80271,-8.66089%20-1.21399,-14.66667%20-1.64403,-24.00765%20-2.77676,-49.3772%20-2.78601,-73.33333%20-0.002,-5.85523%20-0.27217,-8.89925%20-0.95267,-14.66667%20C%20103.54045,856.87907%20104,852.43799%20104,844%20c%200,-7.80452%200.0828,-11.27686%20-0.005,-18.66667%20-0.31038,-26.09106%20-1.32818,-53.6818%20-1.32818,-80%20V%20578.66667%20c%200,-35.48413%201.33333,-72.79745%201.33333,-108%200,-6.50684%200,-9.60368%200,-16%200,-7.13501%200.14393,-10.47901%200.95268,-17.33334%200.55368,-4.69262%200.38035,-7.23836%200.38065,-12%208.1e-4,-12.53108%200.49284,-27.7535%202.10082,-40%200.5506,-4.19336%200.54026,-6.52645%200.56688,-10.66666%200.0349,-5.42969%201.0596,-11.76766%201.3323,-17.33334%201.087,-22.18481%205.14635,-44.88712%209.35185,-64%204.12223,-18.73437%207.75807,-30.78491%2017.60391,-45.33333%204.58686,-6.77767%2014.44068,-18.38778%2022.37758,-24.31999%205.66233,-4.23217%2010.96304,-7.66211%2017.33333,-11.59358%2021.39484,-13.20386%2037.85392,-18.33822%2056,-23.51644%2030.93555,-8.82788%2065.69759,-10.34188%2098.66667,-14.67082%22/%3E%3Cpath%20d=%22m%20949.33333,371.2325%20c%206.34855,-0.83357%208.96582,-0.56583%2014.66667,-0.56583%2010.04744,0%2021.81079,0%2032,0%205.2268,0%207.9558,-3.3e-4%2013.3333,0%2014.5786,9.7e-4%2044.5696,1.07617%2058.6667,2.44034%204.0934,0.39616%206.4605,0.23959%2010.6667,0.79216%2016.2266,2.13159%2032.6974,2.3457%2048,4.87451%2028.5009,4.70988%2057.7494,11.17277%2080,19.28491%208.6024,3.13632%2017.2483,7.15715%2024,11.3982%203.5206,2.2115%207.8791,4.69238%2013.3138,9.48869%206.8517,6.04687%209.3303,10.96557%2011.5925,15.72119%204.7186,9.91927%209.0588,23.2041%2012.5957,37.33333%206.2041,24.78459%2011.0646,50.45532%2014.2912,77.33333%200.8164,6.80078%201.6483,14.45199%202.4938,21.33334%200.8965,7.29565%201.1713,13.39697%201.9393,21.33333%201.1683,12.07292%201.4619,25.57243%203.0062,37.33333%200.6234,4.74821%200.5522,7.22673%200.8868,12%200.2086,2.97754%200.7076,5.05705%200.9877,8%200.4893,5.14136%200.025,10.21696%200.2788,16%201.1454,26.15935%200.3844,55.52637%202.8405,81.33334%200.5703,5.99243%201.0976,8.78401%201.107,14.66666%200.024,14.76547%200,27.84733%200,41.33334%200,3.7028%200,6.99324%200,10.66666%200,9.23243%200.015,21.34587%200,30.66667%20-0.011,7.0013%20-0.9693,10.21973%20-1.2808,17.33333%20-1.2723,29.05485%20-2.5804,59.00277%20-2.7203,88%20-0.02,4.16504%20-0.2631,6.83366%20-0.7664,10.66667%20-0.4552,3.46696%20-0.5315,5.76986%20-0.5658,9.33333%20-0.04,4.13396%20-0.156,6.00928%20-0.7675,10.66667%20-1.4789,11.26318%20-1.5061,23.4145%20-2.8518,34.6667%20-0.9282,7.7605%20-1.1766,15.0145%20-2.0948,22.6666%20-4.425,36.8799%20-9.6766,71.8159%20-18.4887,104%20-2.8531,10.4208%20-6.8721,21.0332%20-10.1717,28%20-1.8068,3.8149%20-3.5302,8.5192%20-8.9157,14.4353%20-6.8219,7.4939%20-13.2924,9.8153%20-19.3765,12.145%20-15.0465,5.7614%20-33.9377,9.8648%20-52,13.4188%20-10.634,2.0922%20-25.5844,4.1569%20-37.3333,5.896%20-6.5153,0.9644%20-13.5489,1.7891%20-20,2.6697%20-6.7461,0.9209%20-13.2653,1.5755%20-20,2.2017%20-13.8116,1.2842%20-28.8099,2.8025%20-42.6667,4.1265%20-9.4836,0.9062%20-17.9744,2.0611%20-28,2.426%20-23.0655,0.8394%20-47.81844,2.0664%20-70.66667,4.2407%20-4.97835,0.4738%20-7.40315,1.0472%20-12,1.1019%20-5.17285,0.062%20-7.81095,-0.2658%20-13.33333,0.3858%20-5.75545,0.679%20-8.5153,0.9503%20-14.66667,0.9526%20-43.13883,0.017%20-87.42212,3.9305%20-130.66666,4%20-7.07943,0.011%20-10.39551,0%20-17.33334,0%20-22.23396,0%20-45.6569,0%20-68,0%20-55.47416,0%20-111.68823,-1.3392%20-166.66666,-2.6862%20-7.42713,-0.1819%20-10.55754,-1.2801%20-17.33334,-1.3128%20-6.65079,-0.032%20-9.52856,-10e-4%20-16,-10e-4%20-5.74886,0%20-8.53633,0.029%20-14.66666,-9e-4%20-7.07866,-0.034%20-10.11621,-1.0223%20-16,-1.2799%20-5.3219,-0.2331%20-8.52189,0.1885%20-14.66667,-0.6183%20-5.92159,-0.7775%20-8.1984,-0.7636%20-13.33333,-0.7675%20-4.94747,-0%20-7.87488,-0.051%20-13.33334,-0.7675%20-3.89795,-0.5118%20-6.76692,-0.5418%20-10.66666,-0.5668%20-3.99956,-0.026%20-6.22799,-0.1838%20-10.66667,-0.7666%20-4.22359,-0.5546%20-6.40796,-0.5573%20-10.66667,-0.5658%20-4.48738,-0.01%20-6.47937,0.1134%20-10.66666,-0.3807%20-3.74707,-0.4421%20-5.52796,-0.8384%20-9.33334,-0.9331%20-3.24914,-0.081%20-4.94897,0.07%20-8,-0.1388%20-3.28434,-0.225%20-5.00101,-0.7023%20-8,-0.9877%20-3.116,-0.2965%20-5.00069,-0.191%20-8,-0.2315%20-3.48665,-0.047%20-5.82039,-0.3011%20-9.33333,-0.7624%20-21.07705,-2.7675%20-44.15879,-4.787%20-65.33333,-7.1656%20-6.69662,-0.7523%20-13.33112,-1.6321%20-20,-2.5597%20-5.22274,-0.7264%20-10.77379,-1.7085%20-16,-2.4784%20-9.31507,-1.3722%20-18.21582,-2.9381%20-26.66667,-4.6285%20-10.43052,-2.0865%20-22.09823,-4.8914%20-32,-7.7336%20-13.81874,-3.9665%20-19.58946,-7.1592%20-25.32819,-11.4794%20-2.61016,-1.965%20-5.09922,-3.8925%20-9.43416,-9.8539%20-5.39763,-7.4229%20-9.04077,-17.9474%20-10.51851,-24%20-4.59294,-18.812%20-8.45457,-38.6275%20-9.33334,-58.6667%20-0.27314,-6.2286%20-1.05011,-13.761%20-1.33333,-20%20-0.209,-4.604%20-0.16292,-6.996%20-0.81996,-12%20-1.01222,-7.7091%20-0.56584,-16.314%20-0.56584,-24%200,-5.2266%200,-7.9557%200,-13.3333%200,-17.1188%201.12211,-37.34378%201.32818,-54.6667%200.90017,-75.66886%208.17658,-150.29671%2019.03396,-224%201.05549,-7.16496%202.15788,-13.10872%203.30864,-20%201.16948,-7.00334%202.52179,-14.45443%203.8107,-21.33333%204.93687,-26.34799%2011.70702,-52.31893%2019.62962,-76%206.23651,-18.64128%2011.45412,-39.19768%2031.55556,-52.40536%207.10173,-4.66618%2012.1449,-7.1145%2018.66667,-9.88273%2016.92421,-7.18359%2035.07876,-12.01701%2053.33333,-16.22013%2021.6564,-4.98641%2043.87305,-8.60604%2066.66667,-11.04631%207.75761,-0.83056%2014.60282,-1.94905%2022.66667,-2.39811%208.43347,-0.46965%2019.01106,-1.03955%2028,-1.43319%204.8114,-0.21069%207.33557,-1.02409%2012,-1.22835%205.8881,-0.25781%2013.88,-0.0525%2020,-0.0525%2013.12378,0%2029.93164,0.50513%2042.66666,-0.0525%2011.73877,-0.514%2023.04924,-2.03434%2034.66667,-2.56169%205.92912,-0.26912%2012.91919,-0.95125%2018.66667,-1.48559%2016.64852,-1.54794%2035.76045,-5.00668%2050.66666,-8.18115%2021.15324,-4.50481%2042.39514,-11.11841%2064,-22.79729%20C%20660.86507,488.20133%20684.40112,467.57495%20704,448%20c%2013.76945,-13.75269%2030.6547,-25.45451%2048,-35.2325%2018.11239,-10.21045%2038.25057,-17.22673%2053.33333,-21.53085%2012.1626,-3.47078%2026.24748,-6.0865%2038.66667,-8.56998%209.75391,-1.95052%2016.27645,-3.85246%2028,-5.11215%203.01058,-0.32348%206.1394,-0.56787%209.33333,-0.98868%209.48055,-1.24903%2015.13469,-1.25375%2024,-2.46395%203.27629,-0.44727%206.1945,-0.65373%209.33334,-0.98975%2011.70825,-1.2535%2022.11499,-0.23161%2034.66666,-1.87964%22/%3E%3C/svg%3E');
  position: relative;
  top: 8px;
  margin-right: 6px;
}

.webDirectoryFolderName {
  display: inline-block;
  cursor: pointer;
  transform: translateY(-1px);
}

.webDirectoryFolderName:hover {
  color: rgb(191, 0, 0);
}

.webDirectoryFolderName:has(+ .webDirectory.\--open)::before,
.webDirectoryFolderName:hover::before {
  content: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20lang=%22en-GB%22%20width=%2232%22%20height=%2232%22%20viewBox=%220%200%201440%201440%22%3E%3Ctitle%3EDocument%20Icon%3C/title%3E%3Cdefs%3E%3Cstyle%3E%3C!%5BCDATA%5B:root%7B--outerFolderColor:rgb(164,13,13);--innerFolderColor:rgb(222,40,37);%7Drect:nth-of-type(1)%7Bwidth:1440px;height:1440px;fill:rgb(0,0,0,0);%7Dpath:nth-of-type(1)%7Bstroke:var(--outerFolderColor);fill:var(--outerFolderColor);%7Drect:nth-of-type(2)%7Bx:1190px;y:1250px;width:100px;height:20px;fill:rgb(255,255,255);%7Dpath:nth-of-type(2)%7Bstroke:var(--innerFolderColor);fill:var(--innerFolderColor);%7D%5D%5D%3E%3C/style%3E%3C/defs%3E%3Crect%20/%3E%3Cpath%20d=%22m%20182.66667,99.232503%20c%204.06945,-0.534342%207.82896,-0.564209%2012,-0.565836%2010.07078,-0.0039%2020.55708,0%2030.66666,0%2039.1356,0%2078.29977,-0.428386%20117.33334,1.280843%2040.84086,1.78833%2086.67427,-0.04395%20126.66666,3.82617%204.26787,0.41301%206.45996,0.23796%2010.66667,0.79216%209.77083,1.28727%2020.65031,2.85424%2030.66667,4.66463%2013.98104,2.52702%2025.79455,8.46956%2038.66666,15.11418%2021.81588,11.26147%2042.45712,27.30265%2058.04733,46.32202%207.15014,8.7229%2011.45068,19.2762%2018.57613,27.99894%206.13334,7.50822%2015.17525,11.18538%2021.13582,18.68831%208.4648,10.65519%2012.5225,23.42709%2022.26025,33.30762%2026.90365,27.29818%2067.87126,43.28019%20103.98047,45.2911%209.64217,0.53694%2018.72673,0.66723%2028,1.76139%204.07479,0.48079%207.58203,0.93026%2012,0.95158%2023.98535,0.11564%2048.01433,1.33439%2072,1.33439%20h%20113.33334%20c%2017.41263,0%2037.53323,0%2054.66663,0%205.7661,0%208.7609,0%2014.6667,0%2015.7406,0%2032.4507,1.25732%2048,1.33228%204.9437,0.0238%207.4747,0.001%2012,0.001%2010.835,0%2022.8897,0.73747%2033.3333,1.45264%206.8472,0.46891%2017.1643,0.51953%2024,3.62663%204.3734,1.98787%207.1241,4.02311%209.3334,5.4331%205.2685,3.36231%2011.0845,6.91162%2017.3333,12.40023%208.7826,7.71419%2019.8395,17.81201%2028.3611,27.75407%204.5175,5.27059%208.6536,10.26994%2012.7654,16%2011.214,15.62736%2018.0606,33.6403%2022.2078,52%201.6553,7.32796%202.2084,13.67318%203.1256,21.33333%201.0263,8.57202%202.5595,19.76905%202.859,28%200.1219,3.34921%200.3283,5.87834%200.7819,9.33334%200.607,4.62312%200.5639,7.03491%200.5659,12%200,4.65486%20-0.2029,8.82316%200.2263,13.33333%202.6626,27.97721%202.4403,56.96476%202.4403,85.33333%200,155.01921%202.6667,310.15813%202.6667,465.33337%20v%20160%20c%200,10.403%200.068,24.6948%20-0,34.6666%20-0.052,7.5417%20-0.133,11.5871%20-9.3333,13.8405%20-25.6932,6.2932%20-46.4377,5.0344%20-73.3323,6.212%20-73.7043,3.2274%20-147.5147,0.8253%20-221.3333,2.6337%20-204.60042,5.0125%20-409.91081,1.3138%20-614.66667,1.3138%20H%20190.66667%20141.33333%20c%20-5.60569,0%20-14.93319,0.1936%20-20,-0.026%20-6.0214,-0.2606%20-7.93151,-1.2201%20-12.95267,-6.6666%20-15.495345,-16.808%20-35.008239,-35.0154%20-49.43313,-53.3077%20-7.715413,-9.7839%20-15.904388,-21.4541%20-22.140945,-32%20-6.257841,-10.5819%20-7.799802,-21.7326%20-9.187243,-33.3333%20-5.580727,-46.6621%20-1.8374,-95.4322%20-5.072017,-142.6667%20-2.520804,-36.81076%200.347987,-73.79757%20-1.26646,-110.66663%20C%2014.940618,749.87467%2020,603.67676%2020,458.66667%20V%20296%20c%200,-16.20882%20-0.0259,-39.17586%200,-54.66667%200.01047,-6.26147%20-0.08581,-9.15983%202.724279,-14.66666%203.172513,-6.21713%207.749639,-14.89877%2011.376543,-21.33334%20C%2042.006546,191.30754%2048.761581,176.92375%2058.530863,164%20c%2017.828965,-23.58594%2044.545207,-40.90739%2070.802467,-52.92179%2011.49786,-5.26099%2025.18189,-8.39714%2037.33334,-10.29118%207.8682,-1.226402%207.69913,-0.4646%2016,-1.554527%22%20/%3E%3Crect%20/%3E%3Cpath%20d=%22m%2032,1153.3333%20c%205.14802,1.7461%209.841855,2.9145%2021.333333,4.5607%208.169327,1.1704%2021.754954,1.9358%2029.212962,-4.8457%2017.785605,-16.1719%2022.190285,-47.9687%2027.253095,-70.3816%2018.45515,-81.7006%2022.76863,-165.5426%2036.53806,-248.00003%207.50906,-44.96753%2015.80948,-92.60222%2048.38169,-126.66667%2013.33801,-13.94906%2029.54805,-27.93107%2046.61419,-36.90633%2026.40839,-13.88843%2059.0127,-17.83032%2088,-19.14616%2049.13847,-2.23063%2099.72124,-5.37939%20149.33334,-6.59465%2034.81156,-0.8527%2070.68554,1.71818%20105.33333,-1.57918%2034.60343,-3.29321%2070.5481,-2.44035%20105.33333,-2.44035%2011.46468,0%2032.32512,-1.14534%2042.66667,-1.33951%205.32878,-0.10002%207.57674,-0.45606%2012,-4.19133%209.89062,-8.35221%2023.59587,-24.73169%2033.33333,-34.46916%2037.51709,-37.51709%2071.0507,-80.96899%20116,-110.20678%2037.4266,-24.34457%2080.60214,-27.86125%20122.66667,-32.84058%2036.7327,-4.34814%2074.9716,-2.73177%20112,-3.63883%2050.972,-1.24862%20102.382,-2.26734%20153.3333,-0.033%2026.4268,1.15893%2053.8559,3.00683%2078.6667,14.07202%2020.1079,8.96785%2038.2518,26.50325%2050.6286,44.64713%208.8893,13.03133%2013.6387,28.98446%2015.6614,44%202.3718,17.60531%202.5524,36.62574%201.7624,54.66667%20-1.4033,32.04338%20-3.4189,63.91309%20-6.4938,94.66667%20-4.384,43.84554%20-9.0195,88.75146%20-14.5124,133.33333%20-10.938,88.7758%20-19.5617,179.7866%20-35.3795,270.6667%20-8.061,46.3134%20-18.0932,93.6835%20-57,123.9794%20-18.7441,14.5955%20-40.8776,27.0778%20-64,31.2006%20-12.6103,2.2484%20-24.4831,3.1864%20-37.3334,3.5062%20-76.4236,1.9017%20-152.7053,3.9804%20-229.3333,3.9804%20H%20365.33333%20190.66667%20141.33333%20c%20-6.12305,0%20-15.70493,0.218%20-21.33333,-0.026%20-7.32958,-0.3173%20-9.11584,-2.9673%20-14.89301,-9.3086%20-3.41205,-3.7453%20-6.835058,-6.9311%20-10.213985,-10.6657%20-11.585886,-12.8053%20-23.490458,-25.4734%20-35.099797,-38.6666%20-5.07165,-5.7635%20-11.413605,-14.005%20-15.334361,-20%20-3.151929,-4.8195%20-5.69721,-8.7585%20-8.745885,-14.6667%20C%2026.665827,1162.4671%2034.116837,1164.8671%2028,1152%22%20/%3E%3C/svg%3E');
}

.webDirectoryFolder:has(> .webDirectory:empty) .webDirectoryFolderName,
.webDirectoryFolder:has(> .webDirectory:empty)::before {
  opacity: 0.25;
  pointer-events: none;
}

.webDirectoryFile {
  position: relative;
  height: 42px;
  margin-left: 8px;
  line-height: 42px;
  font-weight: 400;
  list-style-type: none;
  box-sizing: border-box;
}

.webDirectoryFolder + .webDirectoryFile,
li.webDirectoryFile:first-of-type {
  margin-top: 6px;
}

li.webDirectoryFile:last-of-type {
  padding-bottom: 12px;
}

.webDirectoryFileName {
  position: absolute;
  inset: 0;
  display: block;
  width: min-content;
  padding: 0 12px 0 38px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 48px;
  cursor: pointer;
}

.webDirectoryFileName::before {
  content: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20lang=%22en-GB%22%20width=%2232%22%20height=%2232%22%20viewBox=%220%200%20100%20100%22%3E%3Ctitle%3EDocument%20Icon%3C/title%3E%3Cdefs%3E%3Cstyle%3E%3C!%5BCDATA%5B:root%7B--themeColor00:rgba(0,0,0,0);--themeColor01:rgb(127,0,0);%7Drect%7Bwidth:100px;height:100px;fill:var(--themeColor00);%7Dpolygon,polyline%7Bfill:rgb(0,0,0,0);stroke:var(--themeColor01);stroke-width:1px;%7Dline%7Bstroke:var(--themeColor01);%7D%5D%5D%3E%3C/style%3E%3C/defs%3E%3Crect/%3E%3Cg%20id=%22document%22%3E%3Cpolygon%20points=%2220,20%2030,10%2080,10%2080,90%2020,90%22/%3E%3Cpolyline%20points=%2230,10%2030,20%2020,20%22/%3E%3Cline%20x1=%2230%22%20y1=%2235%22%20x2=%2270%22%20y2=%2235%22/%3E%3Cline%20x1=%2230%22%20y1=%2247.5%22%20x2=%2270%22%20y2=%2247.5%22/%3E%3Cline%20x1=%2230%22%20y1=%2260%22%20x2=%2270%22%20y2=%2260%22/%3E%3Cline%20x1=%2230%22%20y1=%2272.5%22%20x2=%2270%22%20y2=%2272.5%22/%3E%3C/g%3E%3C/svg%3E');
  position: absolute;
  inset: 4px 0 0 2px;
  z-index: 6;
  display: block;
  width: 32px;
  margin-right: 6px;
  filter: contrast(400%);
  cursor: pointer;
}

.webDirectoryFileName:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(191, 0, 0);
}

.webDirectoryFileName:hover::before {
  content: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20lang=%22en-GB%22%20width=%2232%22%20height=%2232%22%20viewBox=%220%200%20100%20100%22%3E%3Ctitle%3EDocument%20Icon%3C/title%3E%3Cdefs%3E%3Cstyle%3E%3C!%5BCDATA%5B:root%7B--themeColor00:rgba(0,0,0,0);--themeColor01:rgb(255,255,255);%7Drect%7Bwidth:100px;height:100px;fill:var(--themeColor00);%7Dpolygon,polyline%7Bfill:rgb(0,0,0,0);stroke:var(--themeColor01);stroke-width:4px;%7Dline%7Bstroke:var(--themeColor01);stroke-width:1px;shape-rendering:crispEdges;vector-effect:non-scaling-stroke;%7D%5D%5D%3E%3C/style%3E%3C/defs%3E%3Crect/%3E%3Cg%20id=%22document%22%3E%3Cpolygon%20points=%2220,20%2030,10%2080,10%2080,90%2020,90%22/%3E%3Cpolyline%20points=%2230,10%2030,20%2020,20%22/%3E%3Cline%20x1=%2230%22%20y1=%2235%22%20x2=%2270%22%20y2=%2235%22/%3E%3Cline%20x1=%2230%22%20y1=%2247.5%22%20x2=%2270%22%20y2=%2247.5%22/%3E%3Cline%20x1=%2230%22%20y1=%2260%22%20x2=%2270%22%20y2=%2260%22/%3E%3Cline%20x1=%2230%22%20y1=%2272.5%22%20x2=%2270%22%20y2=%2272.5%22/%3E%3C/g%3E%3C/svg%3E');
}
```

### JS:
```js
const webDirectoryFolderNames = document.querySelectorAll('.webDirectoryFolderName');

const toggleFolder = (e) =>  {
  const webDirectory = e.currentTarget.nextElementSibling;
  webDirectory.style.setProperty('transition', `height ${(webDirectory.scrollHeight / 360).toFixed(2)}s linear`);
  webDirectory.style.setProperty('height', webDirectory.scrollHeight + 'px');
  webDirectory.classList.add('--transitioning');
  webDirectory.classList.toggle('--open');
  const timeout = ((webDirectory.scrollHeight / 360) * 1000);
  setTimeout(() => webDirectory.style.removeProperty('height'), (webDirectory.classList.contains('--open')) ? timeout : 0);
  setTimeout(() => webDirectory.classList.remove('--transitioning'), timeout);
  setTimeout(() => webDirectory.removeAttribute('style'), timeout);
}
  
webDirectoryFolderNames.forEach((folderName) => folderName.addEventListener('click', toggleFolder));
```

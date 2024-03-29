import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
	background-color: #020309;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	color: #fff;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: #343434;
}

::selection {
    color: white;
    background-color: #6033FF;
}
::-moz-selection {
    color: white;
    background-color: #6033FF;
}
strong {
	font-weight: bold;
}
`

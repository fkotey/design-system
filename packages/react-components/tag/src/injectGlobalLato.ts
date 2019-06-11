import { injectGlobal } from 'emotion';

injectGlobal(`
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNEIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNED8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v14/2HG_tEPiQ4Z6795cGfdivJBw1xU1rKptJj_0jans920.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNED8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/cT2GN3KRBUX69GVJ2b2hxn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/G-cgiyv4b0HVLV2M8HoP9A.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/1KWMyx7m-L0fkQGwYhWwuuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/G-cgiyv4b0HVLV2M8HoP9A.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rn4X0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rnz8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/HkF_qI1x_noxlxhrhMQYEJBw1xU1rKptJj_0jans920.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rnz8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v14/IY9HZVvI1cMoAHxvl0w9LVKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/kU6VHbqMAZhaN_nXCmLQsQ.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v14/22JRxvfANxSmnAhzbFH8PgLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/kU6VHbqMAZhaN_nXCmLQsQ.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/8qcEw_nrk_5HEcCpYdJu8BTbgVql8nDJpwnrE27mub0.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/1bHRUMxmJHoup12DnI9XmQ.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/MDadn8DQ_3oT6kvnUq_2r_esZW2xOQ-xsNqO47m55DA.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/1bHRUMxmJHoup12DnI9XmQ.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/rZPI2gHXi8zxUjnybc2ZQFKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/I1Pn3gihk5vyP0Yw5GqKsQ.woff) format('woff');
  unicode-range: U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/MgNNr5y1C_tIEuLEmicLmwLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/I1Pn3gihk5vyP0Yw5GqKsQ.woff) format('woff');
  unicode-range: U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}
`);
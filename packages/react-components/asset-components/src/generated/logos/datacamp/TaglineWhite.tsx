import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTaglineWhite({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={223}
      height={162}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'datacamp logo'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M34.272 49.746a4.844 4.844 0 014.904-.152l25.322 14.575a3.378 3.378 0 011.687 2.922v17.734l21.053-12.038L94 76.673 66.185 92.578v17.683l27.782 15.849L87.2 130 61.18 115.15a3.38 3.38 0 01-1.698-2.928V96.417l-20.313 11.61c-.062.035-.127.07-.19.101a4.842 4.842 0 01-4.701-.25 4.868 4.868 0 01-2.277-4.13V53.875a4.87 4.87 0 012.272-4.13zM147.192 84v5.87h5.766v3.116h-5.767v12.058c0 1.861 1.218 2.508 2.802 2.508a6.033 6.033 0 003.007-.93v3.408c-.53.207-1.868.97-3.372.97-3.373 0-6.052-2.186-6.052-5.828V92.986H140V89.87h3.576V84h3.615zm16.783 5c3.32 0 5.82 1.5 7.378 3.917V89.25H175v21.5h-3.647v-3.666c-1.558 2.416-4.057 3.915-7.378 3.915h-.042c-4.957 0-8.933-4.75-8.933-10.999C155 93.828 158.978 89 163.933 89h.042zm-37.003 0c3.318 0 5.817 1.5 7.374 3.917V89.25H138v21.5h-3.654v-3.666c-1.557 2.416-4.056 3.915-7.374 3.915h-.041c-4.957 0-8.931-4.75-8.931-10.999C118 93.828 121.977 89 126.93 89h.042zM116 81v29.753h-3.647v-3.471a8.7 8.7 0 01-7.214 3.718C100.188 111 96 106.207 96 100.09c0-6.116 4.188-10.91 9.14-10.91 3.073 0 5.573 1.488 7.213 3.8V81H116zm-9.795 11.818c-3.844 0-6.558 3.182-6.558 7.273 0 4.092 2.706 7.315 6.558 7.315 3.853 0 6.148-3.223 6.148-7.315 0-4.091-2.304-7.273-6.148-7.273zm59-.193h-.04c-4.058 0-6.516 3.125-6.516 7.376 0 4.334 2.5 7.376 6.515 7.376h.04c3.65 0 6.149-3.25 6.149-7.376 0-4.125-2.5-7.376-6.149-7.376zm-37.004 0h-.038c-4.054 0-6.513 3.125-6.513 7.376 0 4.334 2.499 7.376 6.513 7.376h.042c3.646 0 6.145-3.25 6.145-7.376h-.004c0-4.125-2.5-7.376-6.145-7.376zM38.71 57.104v43.431l20.763-11.874V69.044L38.71 57.104zM163.975 65c3.32 0 5.82 1.49 7.378 3.917V65.25H175v21.5h-3.647v-3.668c-1.558 2.418-4.057 3.917-7.378 3.917h-.042C158.976 87 155 82.25 155 76.001 155 69.828 158.978 65 163.933 65h.042zm19.566 0c4.32.043 6.948 3.668 6.948 6.793h-3.415a3.372 3.372 0 00-1.079-2.459 3.476 3.476 0 00-2.48-.958c-2.081 0-3.522 1.124-3.522 2.666 0 1.5.881 2.25 2.681 2.667l2.4.543c4 .915 5.926 3.207 5.926 6.25 0 3.618-2.8 6.498-7.439 6.498-5 0-7.561-4-7.561-7.25h3.36a3.695 3.695 0 001.308 2.793 4.19 4.19 0 002.881 1.083c2.479 0 3.92-1.375 3.92-3.084 0-1.75-1.161-2.5-3.76-3.125l-2.249-.54c-2.56-.627-5-2.168-5-5.793 0-3.29 2.84-6.124 7.08-6.084zm-18.337 3.625h-.04c-4.057 0-6.515 3.125-6.515 7.376 0 4.332 2.5 7.374 6.515 7.374h.04c3.65 0 6.149-3.249 6.149-7.374s-2.5-7.376-6.149-7.376zM115.061 40c5.812 0 8.658 4.834 8.939 7.376h-3.768a5.44 5.44 0 00-1.843-2.667c-.762-.624-1.884-1.084-3.326-1.084-3.848 0-6.494 3.334-6.494 7.376s2.685 7.376 6.494 7.376c1.29.01 2.547-.43 3.568-1.252a4.895 4.895 0 001.603-2.458h3.686C123.6 57.008 120.592 62 115.061 62 109.368 62 105 57.085 105 51.001 105 44.917 109.368 40 115.061 40zm28.026 0c5.758 0 9.913 4.877 9.913 10.667 0 .543-.04 1.083-.082 1.541h-16.184c.37 3.619 2.631 6.252 6.498 6.252h.01c3.458 0 5.225-2.376 5.555-3.502h3.825c-.246 1.793-2.92 7.042-9.38 7.042C137.116 62 133 57.208 133 51.001 133 44.877 137.239 40 143.087 40zm20.888 0c3.32 0 5.82 1.49 7.378 3.917V40.25H175v21.5h-3.647v-3.666c-1.558 2.416-4.057 3.915-7.378 3.915h-.042C158.976 62 155 57.25 155 51.001 155 44.828 158.978 40 163.933 40h.042zM131 32v29h-4V32h4zm54.968 8c.678.005 1.356.045 2.03.12H188v3.494c-.284-.08-1.5-.12-1.949-.12-2.92 0-5.435 1.81-5.435 5.875V61H177V40.234h3.613v2.945c1.217-1.892 3.002-3.179 5.355-3.179zm-20.764 3.625h-.04c-4.057 0-6.515 3.125-6.515 7.376 0 4.334 2.5 7.376 6.515 7.376h.04c3.65 0 6.149-3.25 6.149-7.376 0-4.125-2.5-7.376-6.149-7.376zm-22.125-.083c-3.373 0-5.636 2.376-6.252 5.626h12.453c-.527-3.167-2.757-5.626-6.201-5.626z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTaglineWhite;

import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgExcel({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Excel'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M20.971 9.016l-.001 1.986h8.28a.75.75 0 01.743.652l.007.102v14.502a.751.751 0 01-.75.753h-8.285v2.005L9 26.842V11.158l11.971-2.142zm-.001 4.06h2.832v1.817h-2.833v.693h2.833v1.817l-2.834-.001v.693h2.834v1.817h-2.835v.692h2.835v1.818l-2.836-.001v.697h2.836v1.734l-2.837-.001v1.468h8.343V11.691H20.97v1.385zm6.875 10.042v1.73H24.49v-1.73h3.355zM17.143 15.47l-1.476.068-1.061 2.506-.882-2.412-1.516.072 1.563 3.31-1.646 3.274 1.402.08 1.025-2.492 1.047 2.61 1.591.094-1.76-3.566 1.713-3.544zm10.702 5.135v1.817H24.49v-1.817h3.355zm0-2.51v1.817H24.49v-1.817h3.355zm0-2.509v1.817H24.49v-1.817h3.355zm0-2.51v1.817H24.49v-1.816h3.355z"
        />
      </g>
    </svg>
  );
}

export default SvgExcel;

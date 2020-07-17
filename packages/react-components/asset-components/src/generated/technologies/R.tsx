import * as React from 'react';

function SvgR(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={39} height={39} {...props}>
      <defs>
        <linearGradient id="r_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#7DD4E7" />
          <stop offset="100%" stopColor="#7099D7" />
        </linearGradient>
        <circle id="r_svg__b" cx={19.5} cy={19.5} r={19.5} />
        <path
          id="r_svg__c"
          d="M19.127 9.925c1.016.073 2.019.249 2.98.55.961.297 1.885.704 2.728 1.237.84.533 1.603 1.197 2.176 2.006.577.801.933 1.773.93 2.762.003.989-.353 1.96-.93 2.761-.304.43-.663.818-1.057 1.168-.45.85-1.177 1.5-2.074 1.927l3.7 6.186h-3.458l-3.303-5.587-.785.001c-.09.012-.181.024-.272.034v5.552h-3.105v-5.56a10.72 10.72 0 01-3.595-1.081c-.953-.493-1.855-1.169-2.564-2.08a5.773 5.773 0 01-.86-1.535 5.4 5.4 0 01-.325-1.786 5.367 5.367 0 01.324-1.787 5.652 5.652 0 01.86-1.536c.349-.46.758-.853 1.19-1.199a8.259 8.259 0 011.372-.884c1.92-.986 4.042-1.28 6.068-1.15zm0 1.013a12.13 12.13 0 00-2.747.522 10.36 10.36 0 00-2.465 1.13c-.745.479-1.401 1.064-1.87 1.732-.471.666-.731 1.409-.731 2.158 0 .748.257 1.492.73 2.159.466.67 1.123 1.255 1.869 1.734.748.479 1.586.856 2.466 1.132l.277.082.001-7.411h5.087c2.466 0 4.712.865 4.712 4.102a4.6 4.6 0 01-.345 1.794c.31-.26.593-.552.844-.873.296-.387.555-.811.72-1.275.168-.461.26-.952.265-1.444a4.385 4.385 0 00-.265-1.445 4.738 4.738 0 00-.72-1.274c-.603-.772-1.398-1.37-2.256-1.808a9.588 9.588 0 00-2.732-.888c-.942-.163-1.9-.19-2.84-.127zm2.022 5.721h-1.41v3.88h1.41c1.234 0 1.982-.687 1.982-2.017 0-1.441-.748-1.863-1.982-1.863z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#r_svg__a)" xlinkHref="#r_svg__b" />
        <use fill="#FFF" xlinkHref="#r_svg__c" />
      </g>
    </svg>
  );
}

export default SvgR;

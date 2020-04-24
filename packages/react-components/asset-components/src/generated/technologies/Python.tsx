import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgPython({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={39} height={39} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="python_svg__a"
          x1="50%"
          x2="50%"
          y1="3.249%"
          y2="96.774%"
        >
          <stop offset="1.539%" stopColor="#82DA9E" />
          <stop offset="100%" stopColor="#48AE76" />
        </linearGradient>
        <circle id="python_svg__b" cx={19.5} cy={19.5} r={19.5} />
        <path
          id="python_svg__c"
          d="M26.849 14.552c1.432 0 2.107 1.055 2.46 2.457.492 1.948.514 3.408 0 4.926-.497 1.474-1.03 2.457-2.46 2.457h-7.376v.615h4.915v1.847c0 1.399-1.221 2.11-2.46 2.463-1.864.533-3.358.451-4.915 0-1.301-.377-2.46-1.15-2.46-2.463V22.24c0-1.328 1.113-2.463 2.46-2.463h4.915c1.638 0 3.074-1.404 3.074-3.073v-2.152zm-5.166 11.351a1.018 1.018 0 1 0 1.018 1.015c0-.561-.455-1.015-1.018-1.015zm-2.27-16.59a15.51 15.51 0 0 1 2.57.2c1.337.22 2.465 1.215 2.465 2.538v4.65a2.472 2.472 0 0 1-2.466 2.482h-4.925c-1.672 0-3.08 1.422-3.08 3.033v2.232H12.28c-1.433 0-2.27-1.03-2.62-2.476-.473-1.942-.453-3.103 0-4.963.392-1.623 1.647-2.476 3.08-2.476h6.782v-.62h-4.931V12.05c0-1.409.378-2.173 2.465-2.538a14.217 14.217 0 0 1 2.356-.2zm-2.678 1.747a1.02 1.02 0 0 0-1.019 1.021c0 .562.456 1.016 1.02 1.016a1.018 1.018 0 1 0 0-2.037z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#python_svg__a)" xlinkHref="#python_svg__b" />
        <use fill="#FFF" fillRule="nonzero" xlinkHref="#python_svg__c" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgPython svgRef={ref} {...props} />
));
export default ForwardRef;
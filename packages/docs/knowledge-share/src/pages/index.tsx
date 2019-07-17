import { Link } from 'gatsby';
import * as React from 'react';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const headingSizeMap = {
  large: 32,
  medium: 28,
  small: 24,
};

const Heading: React.FC<{
  children: string;
  size: keyof typeof headingSizeMap;
}> = ({ children, size }) => (
  <h1 style={{ fontSize: headingSizeMap[size] }}>{children}</h1>
);

interface BaseButton {
  children: string;
}

interface NormalButton extends BaseButton {
  onClick: () => void;
  type: 'normal';
}

interface LinkButton extends BaseButton {
  href: string;
  type: 'link';
}

const isLink = (
  buttonProps: LinkButton | NormalButton
): buttonProps is LinkButton => buttonProps.type === 'link';

const Button: React.FC<NormalButton | LinkButton> = props => {
  if (isLink(props)) {
    const { href, children } = props;
    return <a href={href}>{children}</a>;
  }
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

interface SelectProps<T> {
  options: { key: T; value: string }[];
  selectedOption: T;
  onChange: (newKey: T) => void;
}

type stringFunction = () => string;

interface IconProps {
  color: string | stringFunction;
}

const Select = <T extends string | number>({
  options,
  selectedOption,
  onChange,
}: SelectProps<T>): React.ReactElement => (
  <select
    onChange={event => onChange(options[event.currentTarget.selectedIndex].key)}
  >
    {options.map(({ key, value }) => (
      <option selected={key === selectedOption}>{value}</option>
    ))}
  </select>
);

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Heading size="medium">Hi people</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button onClick={() => alert('clicked')} type="normal">
      click me
    </Button>
    <Select
      onChange={option => alert(`${option} chosen`)}
      options={[
        { key: 11234, value: 'an option' },
        { key: 3456, value: 'another option' },
      ]}
      selectedOption={11234}
    />
    <div style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

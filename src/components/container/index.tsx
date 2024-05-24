import clsx from "clsx";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface ContainerProps extends DivProps {}

const Container = (props: ContainerProps) => {
  const { className, ...containerProps } = props;
  return <div className={clsx(className, "mx-6")} {...containerProps} />;
};

export default Container;

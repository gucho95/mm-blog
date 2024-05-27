export type FormattingMenuAction = {
  name: string;
  title?: string;
  icon: React.ReactNode;
  onSelect: (name: string) => void;
  selected?: () => boolean;
  borderAfter?: boolean;
  borderBefore?: boolean;
};

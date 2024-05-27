import { Cross1Icon } from "@radix-ui/react-icons";
import { Badge, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { KeyboardEvent, useState } from "react";

type ArticleFormTopicsProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

const ArticleFormTopics = (props: ArticleFormTopicsProps) => {
  const { value, onChange } = props;

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Tab") {
      const topic = event.currentTarget.value.trim();

      if (topic.length && !value.includes(topic)) {
        event.preventDefault();
        onChange([...value, topic]);
        event.currentTarget.value = "";
      }
    }
  };

  const onTopicDelete = (topic: string) => {
    onChange(value.filter((v) => v !== topic));
  };

  return (
    <Flex wrap={"wrap"} align="center" gapX="2" gapY="1">
      {value.map((val) => (
        <Badge key={val} className="group">
          #{val.toUpperCase()}
          <IconButton
            variant="ghost"
            size="1"
            onMouseDown={(event) => {
              event.preventDefault();
              onTopicDelete(val);
            }}
          >
            <Cross1Icon width="8px" height="8px" />
          </IconButton>
        </Badge>
      ))}

      <input
        placeholder="You article topics"
        className="placeholder:text-gray-200 focus:placeholder:text-gray-400 placeholder:font-medium text-base outline-none min-w-[120px] flex-1 h-full !border-none !shadow-none !hover:border-none !ring-0"
        onKeyDown={onKeyDown}
      />
    </Flex>
  );
};

export default ArticleFormTopics;

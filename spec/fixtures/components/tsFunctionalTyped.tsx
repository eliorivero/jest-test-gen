import React from 'react'; // we need this to make JSX compile

type CardParagraph = {
  content: string
}

type CardProps = {
  title: string,
  paragraph: CardParagraph
  myOptionalString?: string
}

export const Card = ({ title, paragraph }: CardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>

const el = <Card title="Welcome!" paragraph={{ content: "To this example" }} />
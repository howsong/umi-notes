import AntdDemos from '@/components/AntdDemos'

interface Props<T> {
  content: T
}
function Foo<T>(props: Props<T>) {
  return (
    <div>{props.content}</div>
  )
}
const Foo1 = <T extends {}>(props: Props<T>) => {
  return (
    <div>{props.content}</div>
  )
}

export default function IndexPage() {
  return (
    <div>
      <AntdDemos />
      <Foo<number> content={10} />
      <Foo<string> content={'10'} />
      <Foo1<number> content={10} />
      <Foo1<string> content={'10'} />
    </div>
  );
}

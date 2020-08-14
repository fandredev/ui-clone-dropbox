export interface Props<S> {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: S,
  description: S;
}
export interface InputProps<S> {
  name: S,
  value: S,
  placeholder: S,
  type: S,
  onChange: (name: string, value: string) => void
}
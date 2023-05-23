import kitchenSink from "./index.md";

export const KitchenSink = () => {
  return <div dangerouslySetInnerHTML={{ __html: kitchenSink }} />;
};

export default KitchenSink;

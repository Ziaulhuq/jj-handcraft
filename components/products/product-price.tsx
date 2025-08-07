import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");
  return (
    <div>
      <div className={cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
      </div>
    </div>
  );
};

export default ProductPrice;

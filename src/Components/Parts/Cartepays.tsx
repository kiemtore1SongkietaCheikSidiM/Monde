import type { Pays } from "../../pages/Dashboard"

type Props = {
  countries: Pays;
};

const Cartepays = ({ countries }: Props) => {
  return (
    <div className="mt-2">
      <h3>{countries.names.common}</h3>
    </div>
  );
};

export default Cartepays;
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg">
        <span className="text-coral-red "> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover exclusive premium sneakers with unmatched comfort and style. Limited time offer on our best-selling Nike collection featuring cutting-edge technology for athletes and everyday wear.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Shop now and enjoy premium quality at exceptional prices today.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="shop now" iconUrl={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

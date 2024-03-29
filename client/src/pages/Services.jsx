import { useAuth } from "../contexts/Auth";
import HomePageImage from "../Assets/Images/HomePageImage.webp";

function Services() {
  const { serviceData } = useAuth();
  return (
    <section className="grid grid-cols-3 gap-8 bg-gray-800 p-8 h-[89.5vh]">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold text-white text-center">Services</h1>
      </div>

      {serviceData &&
        serviceData.map((service, index) => (
          <div key={index} className="flex items-center space-x-4 text-white">
            <div>
              <img
                src={HomePageImage}
                alt="Image"
                className="w-52 h-24 rounded-full"
              />
            </div>
            <div>
              <div>
                <p>
                  <span className="text-yellow-400">Provider</span>{" "}
                  {service.provider}
                </p>
                <p>
                  <span className="text-yellow-400">Price</span> {service.price}
                </p>
              </div>
              <h2 className="text-xl font-bold">
                <span className="text-yellow-400">Service</span>{" "}
                {service.service}
              </h2>
              <p>
                <span className="text-yellow-400">Decription</span>{" "}
                {service.description}
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Services;

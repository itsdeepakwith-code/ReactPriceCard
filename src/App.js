import "./App.css";
import Pricecard from "./pricecard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg";

function App(prop) {
  let priceCardDetails = [
    {
      name: "Free",
      cost: "$0/month",
      features: [
        {
          name: "Single User",
          enabled: true,
        },
        {
          name: "50 GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: false,
        },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        {
          name: "Free Subdomain",
          enabled: false,
        },
        {
          name: "Monthly Status Report",
          enabled: false,
        },
      ],
    },
    {
      name: "Plus",
      cost: "$9/month",
      features: [
        {
          name: "5 Users",
          enabled: true,
        },
        {
          name: "50 GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Report",
          enabled: false,
        },
      ],
    },
    {
      name: "Pro",
      cost: "$49/month",
      features: [
        {
          name: "Unlimited Users",
          enabled: true,
        },
        {
          name: "50 GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Report",
          enabled: true,
        },
      ],
    },
  ];
  return (
    <div className="container text-center">
      <div className="row">
        {priceCardDetails.map((data) => (
          <div className="col-md-4">
            <Pricecard data={data}></Pricecard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

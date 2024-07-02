import React, { useState } from "react";

const AddProduct = () => {
  const ProductData = {
    name: "iPhone 12 Pro max",
    
    colors: [
      {
        name: "black",
        class: "bg-black checked:bg-black",
        selectedClass: "ring-gray-400",
      },
      {
        name: "Red",
        class: "bg-red-500 checked:bg-red-500",
        selectedClass: "ring-gray-400",
      },
      {
        name: "Green",
        class: "bg-green-800 checked:bg-green-800",
        selectedClass: "ring-gray-900",
      },
      {
        name: "Gray",
        class: "bg-gray-400 checked:bg-gray-400",
        selectedClass: "ring-gray-900",
      },
      {
        name: "Blue",
        class: "bg-blue-600 checked:bg-blue-800",
        selectedClass: "ring-gray-900",
      },
    ],
    storage: [
      { name: "128GB", inStock: false },
      { name: "256GB", inStock: true },
      { name: "514GB", inStock: true },
      { name: "1TB", inStock: true },
    ],
    productFeatures: [
      { feature: "Bluetooth", value: "V5.0" },
      { feature: "Screen Size", value: "1.39 inches" },
      {
        feature: "Screen Resolution and Brightness",
        value: "360*360, 500 Nits Daylight-Bright Display, 2.5D Curved Glass",
      },
      { feature: "Battery Capacity", value: "400 mAh" },
      { feature: "Sports Modes", value: "100+" },
      {
        feature: "Health Monitoring",
        value:
          "SpO2, 24*7 Heart Rate Monitoring, Blood Pressure, High Heart Rate Alert",
      },
      { feature: "Health Tracking", value: "Menstrual Cycle, Sleep" },
      {
        feature: "Smart Features",
        value: "Sedentary Alert, Weather, Alarm, Timer, Flashlight, Find Phone",
      },
      { feature: "Smart Controls", value: "Remote Camera and Music Player" },
      {
        feature: "Bluetooth Calling",
        value: "inbuilt mic, speaker and dialer",
      },
      { feature: "All Messages Notifications", value: "Yes" },
      { feature: "Custom & 100+ Watch Faces", value: "Yes" },
      { feature: "Charging Time", value: "2 Hrs" },
      { feature: "Battery Life", value: "10 Days" },
      { feature: "Water Resistance Level", value: "IP68" },
      { feature: "Compatible", value: "Android & iOS" },
    ],
  };
  const [product, setProduct] = useState(ProductData);

  const handleInputChange = (e, section, index) => {
    const { name, value, checked, type } = e.target;
    let updatedProduct = { ...product };

    if (section === 'general') {
      updatedProduct[name] = value;
    } else if (section === 'colors' || section === 'storage' || section === 'productFeatures') {
      updatedProduct[section][index][name] = type === 'checkbox' ? checked : value;
    }

    setProduct(updatedProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', product);
  };
  return  <form onSubmit={handleSubmit}>
  <h2>General Information</h2>
  
  <div>
    <label>
      Name: 
      <input
      className="input outline outline-slate-300 outline-2 ms-2 input-sm"
        type="text"
        name="name"
        value={product.name}
        onChange={(e) => handleInputChange(e, 'general')}
      />
    </label>
  </div>
<div className="divider"></div>
  <h2>Colors</h2>
  {product.colors.map((color, index) => (
    <div key={index}>
      <label>
        Name:
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm"
          type="text"
          name="name"
          value={color.name}
          onChange={(e) => handleInputChange(e, 'colors', index)}
        />
      </label>
      {/* <label>
        Class:
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm "
          type="text"
          name="class"
          value={color.class}
          onChange={(e) => handleInputChange(e, 'colors', index)}
        />
      </label> */}
    </div>
  ))}
<div className="divider"></div>
  <h2>Storage</h2>
  {product.storage.map((storage, index) => (
    <div key={index}>
      <label>
        Name:
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm"
          type="text"
          name="name"
          value={storage.name}
          onChange={(e) => handleInputChange(e, 'storage', index)}
        />
      </label>
      {/* <label>
        In Stock:
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm"
          type="checkbox"
          name="inStock"
          checked={storage.inStock}
          onChange={(e) => handleInputChange(e, 'storage', index)}
        />
      </label> */}
    </div>
  ))}
<div className="divider"></div>
  <h2>Product Features</h2>
  {product.productFeatures.map((feature, index) => (
    <div key={index} className="mt-3 flex">
      {/* <label>
        Feature:
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm"
          type="text"
          name="feature"
          value={feature.feature}
          onChange={(e) => handleInputChange(e, 'productFeatures', index)}
        />
      </label> */}
      <label>
        {feature.feature} :
        <input
        className="input outline outline-slate-300 outline-2 ms-2 input-sm"
          type="text"
          name="value"
          value={feature.value}
          onChange={(e) => handleInputChange(e, 'productFeatures', index)}
        />
      </label>
    </div>
  ))}

  <button type="submit" className="btn">Submit</button>
</form>;
};

export default AddProduct;

import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const AddProduct = () => {
  const initialData = {
    name: "iphone",
    colors: ["Black", "White", "Blue"],
    price: {
      currency: "USD",
      oldPrice: 799,
      newPrice: 699,
    },
    description: "aaa",
    storageOptions: [
      { storage: "64GB", price: "500" },
      { storage: "128GB", price: "500" },
      { storage: "256GB", price: "500" },
    ],
    features: [
      { feature: "Bluetooth", value: "00" },
      { feature: "Screen Size", value: "00" },
      { feature: "Screen Resolution", value: "00" },
      { feature: "Battery Capacity", value: "00" },
      { feature: "Sports Modes", value: "00" },
      ,
    ],
    images: ["image1_url", "image2_url", "image3_url","image4_url"],
  };

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  //  COLOR APPEND / REMOVE
  const {
    fields: colorFields,
    append: appendcolor,
    remove: removecolor,
  } = useFieldArray({
    control,
    name: "colors",
  });

  //  STORAGE APPEND / REMOVE
  const {
    fields: storageFields,
    append: appendStorage,
    remove: removeStorage,
  } = useFieldArray({
    control,
    name: "storageOptions",
  });

  //  FEATURE APPEND / REMOVE
  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  //  IMAGE APPEND / REMOVE
  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "images",
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${VITE_API_URL}/api/product`, {
        method: "POST",
        headers: {
         "content-type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const userres = await response.json();
      if (!userres.error) {
        alert("Product have been added")
        console.log(userres)
        reset()
      }
    } catch (error) {
      console.log(error);
      console.log("some thing happend while fetching");

    }
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start gap-8 w-full  p-5"
    >
      <h2 className="text-4xl mb-8 text-center">ADD PRODUCT</h2>
      {/* NAME */}
      <div>
        <label className="text-lg font-sans font-semibold">Name : </label>
        <input
          className="input input-sm outline outline-1 outline-slate-500 border  mx-2"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name ? (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        ) : (
          ""
        )}
      </div>

      {/* DESCRIPTEION */}
      <div className="flex flex-col gap-5 md:flex-row">
        <label className="text-lg font-sans font-semibold">
          Description :{" "}
        </label>
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full md:max-w-md"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}
      </div>

      {/* COLORS */}
      <div className="flex flex-col gap-5 md:flex-row">
        <label className="text-lg font-sans font-semibold">Colors:</label>
        <div className="flex  flex-col gap-4 gamx-2">
          {colorFields.map((field, index) => (
            <div key={field.id} className="flex">
              <div>
                <Controller
                name={`colors.${index}`}
                control={control}
                rules={{ required: "color is required" }}
                render={({ field }) => (
                  <input
                    className="input input-sm outline outline-1 outline-slate-500 border  "
                    {...field}
                  />
                )}
              />
              {errors.colors?.[index] && (
                <p className="text-red-500 text-xs">{errors.colors[index].message}</p>
              )}
              </div>
              

              <button
                type="button"
                className="btn btn-sm btn-error"
                onClick={() => removecolor(index)}
              >
                remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={() => appendcolor("")}
          >
            add color
          </button>
        </div>
      </div>

      <div>
        <label className="text-lg font-sans font-semibold">Old Price:</label>
        <input
          className="input input-sm outline outline-1 outline-slate-500 border  mx-2"
          type="number"
          {...register("price.oldPrice", { required: "Old price is required" })}
        />
        {errors.price?.oldPrice && (
          <p className="text-red-500 text-xs">{errors.price.oldPrice.message}</p>
        )}
      </div>

      <div>
        <label className="text-lg font-sans font-semibold">New Price:</label>
        <input
          className="input input-sm outline outline-1 outline-slate-500 border  mx-2"
          type="number"
          {...register("price.newPrice", { required: "New price is needed" })}
        />
        {errors.price?.newPrice && (
          <p className="text-red-500 text-xs">{errors.price.newPrice.message}</p>
        )}
      </div>

      {/* STORAGE OPTION */}
      <div className="flex flex-col gap-5 md:flex-row">
        <label className="text-lg font-sans font-semibold">
          Storage Options:
        </label>
        <div className="flex flex-col gap-3">
          {storageFields.map((field, index) => (
            <div key={field.id} className="flex gap-3">
              <div className="flex flex-col">
              <Controller
                name={`storageOptions.${index}.storage`}
                control={control}
                rules={{ required: "Storage option is required" }}
                render={({ field }) => (
                  <input
                    className="input input-sm outline outline-1 outline-slate-500 border"
                    {...field}
                  />
                )}
              />
              {errors.storageOptions?.[index]?.storage && (
                <p className="text-red-500 text-xs">{errors.storageOptions[index].storage.message}</p>
              )}
              </div>
              <div className="flex flex-col">
              <Controller
                name={`storageOptions.${index}.price`}
                control={control}
                rules={{ required: "price is required" }}
                render={({ field }) => (
                  <input
                    className="input input-sm outline outline-1 outline-slate-500 border"
                    {...field}
                  />
                )}
              />
              {errors.storageOptions?.[index]?.price && (
                <p className="text-red-500 text-xs">{errors.storageOptions[index].price.message}</p>
              )}
              </div>
              
              <button
                type="button"
                className="btn btn-sm btn-error"
                onClick={() => removeStorage(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={() => appendStorage({ storage: "" })}
          >
            Add Storage Option
          </button>
        </div>
      </div>

      {/* FEATURES  */}

      <div className="flex flex-col gap-5 md:flex-row">
        <label className="text-lg font-sans font-semibold">Features:</label>
        <div className="flex flex-col gap-5">
          {featureFields.map((field, index) => (
            <div key={field.id} className="flex flex-wrap">
              {/* FEATURE */}
              <div className="flex flex-col mx-2">
                <Controller
                  name={`features.${index}.feature`}
                  control={control}
                  rules={{ required: "feature are needed" }}
                  render={({ field }) => (
                    <input
                      className="input input-sm outline outline-1 outline-slate-500 border "
                      {...field}
                    />
                  )}
                />
                {errors.features?.[index]?.feature && (
                  <p className="text-red-500 text-xs">{errors.features[index].feature.message}</p>
                )}
              </div>
                {/* VALUE */}
              <div className="flex flex-col mx-2">
              <Controller
                name={`features.${index}.value`}
                control={control}
                rules={{ required: "Image URL is required" }}
                render={({ field }) => (
                  <input
                    className="input input-sm outline outline-1 outline-slate-500 border "
                    {...field}
                  />
                )}
              />
              {errors.features?.[index]?.value && (
                <p className="text-red-500 text-xs">{errors.features[index].value.message}</p>
              )}</div>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => removeFeature(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => appendFeature({ feature: "", value: "" })}
          >
            Add Feature
          </button>
        </div>
      </div>

      {/* IMAGE */}

      <div className="flex flex-col gap-5 md:flex-row">
        <label className="text-lg font-sans font-semibold">Images:</label>
        <div className="flex flex-col gap-4">
          {imageFields.map((field, index) => (
            <div key={field.id} className="flex">
              <div className="mx-2">
              <Controller
                name={`images.${index}`}
                control={control}
                rules={{ required: "Image URL is required" }}
                render={({ field }) => (
                  <input
                    className="input input-sm outline outline-1 outline-slate-500 border  "
                    {...field}
                  />
                )}
              />
              {errors.images?.[index] && (
                <p className="text-red-500 text-xs">{errors.images[index].message}</p>
              )}</div>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => appendImage("")}
          >
            Add Image
          </button>
        </div>
      </div>

      <button type="submit" className="btn max-w-md self-center">
        Submit
      </button>
    </form>
  );
};

export default AddProduct;

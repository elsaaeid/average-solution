import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Card from "../../../global-components/card/Card";
import "./ProductForm.scss";
import { useTranslation } from "react-i18next";



const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
          // Translation
	const { t } = useTranslation();
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>{t("dashboard.product.productImage")}</label>
            <code>
             {t("dashboard.product.supportedFormats")}
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>{t("noImg")}</p>
            )}
          </Card>
          <label>{t("dashboard.product.productName")}:</label>
          <input
            type="text"
            placeholder={t("dashboard.product.productName")}
            name="name"
            value={product?.name || ''}
            onChange={handleInputChange}
          />

          <label>{t("dashboard.product.ProductCategory")}:</label>
          <input
            type="text"
            placeholder={t("dashboard.product.ProductCategory")}
            name="category"
            value={product?.category || ''}
            onChange={handleInputChange}
          />
          <label>{t("dashboard.product.ProductLiveDemo")}:</label>
          <input
            type="text"
            placeholder={t("dashboard.product.ProductLiveDemo")}
            name="liveDemo"
            value={product?.liveDemo || ''}
            onChange={handleInputChange}
          />
          
          <label>{t("dashboard.product.ProductDescription")}:</label>
          <ReactQuill
            theme="snow"
            value={description || ''}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
            className="text-gray-500"
          />

          <div>
            <button type="submit" className="btn mt-3">
              {t("dashboard.product.saveProduct")}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;

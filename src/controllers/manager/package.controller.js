const path = "layouts/manager";
const Product = require('../../models/Product');
const Package = require('../../models/Package');
const utils = require('../../utils/functions');

module.exports = {
    getPackageManagement: async (req, res) => {
        // get All Packages
        try {
            let packages = await Package.find({}).populate("productList")
            packages = utils.mapObjectInArray(packages);
            let view = req.query.view || "table"
            let switchView = view === "table" ? "card" : "table";
            res.render(`${path}/packageManagement`, {
                layout: "manager/main",
                tag: "package",
                packages,
                view,
                switchView
            });
        } catch (err) {
            console.log(err.message);
            res.render("error/500");
        }
    },

    addPackage: async (req, res) => {
        try {
            let products = await Product.find({}).populate('category');
            products = utils.mapObjectInArray(products);
            res.render(`${path}/addPackage`, {
                layout: "manager/main",
                tag: "package",
                products
            });
        } catch (err) {
            console.log(err.message);
            res.render("error/500");
        }
    },

    detailPackage: async (req, res) => {
        try {
            let products = await Product.find({}).populate('category');
            products = utils.mapObjectInArray(products);
            res.render(`${path}/detailPackage`, {
                layout: "manager/main",
                tag: "package",
                products
            });
        } catch (err) {
            console.log(err.message);
            res.render("error/500");
        }
    },
}
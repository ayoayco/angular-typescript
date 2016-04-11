module app.productList{

export interface IProductListModel {
/* stuff exposed to the view by the controller */
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];
    toggleImage(): void;
}

/**
 * ProductListCtrl implements IProductListModel
 */
class ProductListCtrl implements IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];
    
    static $inject=["dataAccessService"]
    constructor(private dataAccessService: app.common.DataAccessService) {
        this.title = "Product List";
        this.showImage = false;
        this.products = []; // initialization
        
        var productResource = dataAccessService.getProductResource();
        // query returns an array of objects, set type for the objects
        productResource.query((data: app.domain.IProduct[])=>{
            // assign returned objects to products
            this.products = data;
        });
        

    }
    
    public toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
}

angular.module("productManagement")
.controller("ProductListCtrl", ProductListCtrl);

}
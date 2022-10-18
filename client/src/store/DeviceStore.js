import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id:1, name:'TV'},
            // {id:2, name:'Smartphones'},
            // {id:3, name:'Laptops'},
            // {id:4, name:'Consoles'},
        ]

        this._brands = [
            // {id:1, name:'Samsung'},
            // {id:2, name:'Apple'},
            // {id:3, name:'LG'},
            // {id:4, name:'SONY'},
        ]

        this._devices = [
            // {id:1, name:'Super 1', price:2100.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5222586/img_id5855086643949885357.jpeg/9hq'},
            // {id:2, name:'Iphone 13 Pro MAX', price:1100.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5240013/img_id6364096697164197267.jpeg/9hq'},
            // {id:3, name:'OLED C22', price:3000.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5234357/img_id1674743916909788154.jpeg/9hq'},
            // {id:4, name:'Playstation 5', price:500.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5232583/img_id3998409828592463836.jpeg/9hq'},
            // {id:5, name:'OLED C22', price:3000.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5234357/img_id1674743916909788154.jpeg/9hq'},
            // {id:6, name:'Playstation 5', price:500.00, rating:5, img:'https://avatars.mds.yandex.net/get-mpic/5232583/img_id3998409828592463836.jpeg/9hq'},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    };

    setTypes(types) {
        this._types = types
    }
    ;
    setBrands(brands) {
        this._brands = brands
    };

    setDevices(devices) {
        this._devices = devices
    };

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    };

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    };

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    };

    get brands() {
        return this._brands
    };

    get devices() {
        return this._devices
    };

    get selectedType() {
        return this._selectedType
    };

    get selectedBrand() {
        return this._selectedBrand
    };

    get totalCount() {
        return this._totalCount
    };

    get page() {
        return this._page
    };

    get limit() {
        return this._limit
    };
}
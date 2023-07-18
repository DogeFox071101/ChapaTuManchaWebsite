interface Address {
    addressId  : string;
    addressLine     : string;
    addressExt      : string;
    doorNumber      : number;
    zipCode    : number;
    district    : string;
    city        : string;
    state       : string;
    country     : string;
    coord_x     : number|null;
    coord_y     : number|null;
};
export default Address;
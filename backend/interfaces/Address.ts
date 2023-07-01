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
    coord_x     : number;
    coord_y     : number;
};
export default Address;
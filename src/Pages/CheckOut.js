import { useForm } from "react-hook-form"
import {useState} from "react";
import { discountedPrice } from '../app/Constants'
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemsFromCartAsync, selectItems,updateCartAsync } from '../features/Cart/CartSlice';

import { Link, Navigate } from 'react-router-dom';
import { selectLoggedInUser, updateUserAsync } from "../features/Auth/authSlice";

const addresses = [
    {
        name: "Bilal Malik",
        street: "101 main",
        city: "Karachi",
        PostalCode: "54100",
        state: "Sindh",
        phone: "03450664154",
    },
    {
        name: "umer rajpoot",
        street: "199",
        city: "Sialkot",
        PostalCode: "55100",
        state: "Punjab",
        phone: "03450694154",
    },
];

const countries = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AX', label: 'Åland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    // { value: 'AS', label: 'American Samoa' },
    // { value: 'AD', label: 'Andorra' },
    // { value: 'AO', label: 'Angola' },
    // { value: 'AI', label: 'Anguilla' },
    // { value: 'AQ', label: 'Antarctica' },
    // { value: 'AG', label: 'Antigua and Barbuda' },
    // { value: 'AR', label: 'Argentina' },
    // { value: 'AM', label: 'Armenia' },
    // { value: 'AW', label: 'Aruba' },
    // { value: 'AU', label: 'Australia' },
    // { value: 'AT', label: 'Austria' },
    // { value: 'AZ', label: 'Azerbaijan' },
    // { value: 'BS', label: 'Bahamas' },
    // { value: 'BH', label: 'Bahrain' },
    // { value: 'BD', label: 'Bangladesh' },
    // { value: 'BB', label: 'Barbados' },
    // { value: 'BY', label: 'Belarus' },
    // { value: 'BE', label: 'Belgium' },
    // { value: 'BZ', label: 'Belize' },
    // { value: 'BJ', label: 'Benin' },
    // { value: 'BM', label: 'Bermuda' },
    // { value: 'BT', label: 'Bhutan' },
    // { value: 'BO', label: 'Bolivia (Plurinational State of)' },
    // { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
    // { value: 'BA', label: 'Bosnia and Herzegovina' },
    // { value: 'BW', label: 'Botswana' },
    // { value: 'BV', label: 'Bouvet Island' },
    // { value: 'BR', label: 'Brazil' },
    // { value: 'IO', label: 'British Indian Ocean Territory' },
    // { value: 'BN', label: 'Brunei Darussalam' },
    // { value: 'BG', label: 'Bulgaria' },
    // { value: 'BF', label: 'Burkina Faso' },
    // { value: 'BI', label: 'Burundi' },
    // { value: 'CV', label: 'Cabo Verde' },
    // { value: 'KH', label: 'Cambodia' },
    // { value: 'CM', label: 'Cameroon' },
    // { value: 'CA', label: 'Canada' },
    // { value: 'KY', label: 'Cayman Islands' },
    // { value: 'CF', label: 'Central African Republic' },
    // { value: 'TD', label: 'Chad' },
    // { value: 'CL', label: 'Chile' },
    // { value: 'CN', label: 'China' },
    // { value: 'CX', label: 'Christmas Island' },
    // { value: 'CC', label: 'Cocos (Keeling) Islands' },
    // { value: 'CO', label: 'Colombia' },
    // { value: 'KM', label: 'Comoros' },
    // { value: 'CG', label: 'Congo' },
    // { value: 'CD', label: 'Congo (Democratic Republic of the)' },
    // { value: 'CK', label: 'Cook Islands' },
    // { value: 'CR', label: 'Costa Rica' },
    // { value: 'HR', label: 'Croatia' },
    // { value: 'CU', label: 'Cuba' },
    // { value: 'CW', label: 'Curaçao' },
    // { value: 'CY', label: 'Cyprus' },
    // { value: 'CZ', label: 'Czech Republic' },
    // { value: 'DK', label: 'Denmark' },
    // { value: 'DJ', label: 'Djibouti' },
    // { value: 'DM', label: 'Dominica' },
    // { value: 'DO', label: 'Dominican Republic' },
    // { value: 'EC', label: 'Ecuador' },
    // { value: 'EG', label: 'Egypt' },
    // { value: 'SV', label: 'El Salvador' },
    // { value: 'GQ', label: 'Equatorial Guinea' },
    // { value: 'ER', label: 'Eritrea' },
    // { value: 'EE', label: 'Estonia' },
    // { value: 'ET', label: 'Ethiopia' },
    // { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    // { value: 'FO', label: 'Faroe Islands' },
    // { value: 'FJ', label: 'Fiji' },
    // { value: 'FI', label: 'Finland' },
    // { value: 'FR', label: 'France' },
    // { value: 'GF', label: 'French Guiana' },
    // { value: 'PF', label: 'French Polynesia' },
    // { value: 'TF', label: 'French Southern Territories' },
    // { value: 'GA', label: 'Gabon' },
    // { value: 'GM', label: 'Gambia' },
    // { value: 'GE', label: 'Georgia' },
    // { value: 'DE', label: 'Germany' },
    // { value: 'GH', label: 'Ghana' },
    // { value: 'GI', label: 'Gibraltar' },
    // { value: 'GR', label: 'Greece' },
    // { value: 'GL', label: 'Greenland' },
    // { value: 'GD', label: 'Grenada' },
    // { value: 'GP', label: 'Guadeloupe' },
    // { value: 'GU', label: 'Guam' },
    // { value: 'GT', label: 'Guatemala' },
    // { value: 'GG', label: 'Guernsey' },
    // { value: 'GN', label: 'Guinea' },
    // { value: 'GW', label: 'Guinea-Bissau' },
    // { value: 'GY', label: 'Guyana' },
    // { value: 'HT', label: 'Haiti' },
    // { value: 'HM', label: 'Heard Island and McDonald Islands' },
    // { value: 'VA', label: 'Holy See' },
    // { value: 'HN', label: 'Honduras' },
    // { value: 'HK', label: 'Hong Kong' },
    // { value: 'HU', label: 'Hungary' },
    // { value: 'IS', label: 'Iceland' },
    // { value: 'IN', label: 'India' },
    // { value: 'ID', label: 'Indonesia' },
    // { value: 'IR', label: 'Iran (Islamic Republic of)' },
    // { value: 'IQ', label: 'Iraq' },
    // { value: 'IE', label: 'Ireland' },
    // { value: 'IM', label: 'Isle of Man' },
    // { value: 'IL', label: 'Israel' },
    // { value: 'IT', label: 'Italy' },
    // { value: 'JM', label: 'Jamaica' },
    // { value: 'JP', label: 'Japan' },
    // { value: 'JE', label: 'Jersey' },
    // { value: 'JO', label: 'Jordan' },
    // { value: 'KZ', label: 'Kazakhstan' },
    // { value: 'KE', label: 'Kenya' },
    // { value: 'KI', label: 'Kiribati' },
    // { value: 'KP', label: "Korea (Democratic People's Republic of)" },
    // { value: 'KR', label: 'Korea (Republic of)' },
    // { value: 'KW', label: 'Kuwait' },
    // { value: 'KG', label: 'Kyrgyzstan' },
    // { value: 'LA', label: "Lao People's Democratic Republic" },
    // { value: 'LV', label: 'Latvia' },
    // { value: 'LB', label: 'Lebanon' },
    // { value: 'LS', label: 'Lesotho' },
    // { value: 'LR', label: 'Liberia' },
    // { value: 'LY', label: 'Libya' },
    // { value: 'LI', label: 'Liechtenstein' },
    // { value: 'LT', label: 'Lithuania' },
    // { value: 'LU', label: 'Luxembourg' },
    // { value: 'MO', label: 'Macao' },
    // { value: 'MK', label: 'North Macedonia' },
    // { value: 'MG', label: 'Madagascar' },
    // { value: 'MW', label: 'Malawi' },
    // { value: 'MY', label: 'Malaysia' },
    // { value: 'MV', label: 'Maldives' },
    // { value: 'ML', label: 'Mali' },
    // { value: 'MT', label: 'Malta' },
    // { value: 'MH', label: 'Marshall Islands' },
    // { value: 'MQ', label: 'Martinique' },
    // { value: 'MR', label: 'Mauritania' },
    // { value: 'MU', label: 'Mauritius' },
    // { value: 'YT', label: 'Mayotte' },
    // { value: 'MX', label: 'Mexico' },
    // { value: 'FM', label: 'Micronesia (Federated States of)' },
    // { value: 'MD', label: 'Moldova (Republic of)' },
    // { value: 'MC', label: 'Monaco' },
    // { value: 'MN', label: 'Mongolia' },
    // { value: 'ME', label: 'Montenegro' },
    // { value: 'MS', label: 'Montserrat' },
    // { value: 'MA', label: 'Morocco' },
    // { value: 'MZ', label: 'Mozambique' },
    // { value: 'MM', label: 'Myanmar' },
    // { value: 'NA', label: 'Namibia' },
    // { value: 'NR', label: 'Nauru' },
    // { value: 'NP', label: 'Nepal' },
    // { value: 'NL', label: 'Netherlands' },
    // { value: 'NC', label: 'New Caledonia' },
    // { value: 'NZ', label: 'New Zealand' },
    // { value: 'NI', label: 'Nicaragua' },
    // { value: 'NE', label: 'Niger' },
    // { value: 'NG', label: 'Nigeria' },
    // { value: 'NU', label: 'Niue' },
    // { value: 'NF', label: 'Norfolk Island' },
    // { value: 'MP', label: 'Northern Mariana Islands' },
    // { value: 'NO', label: 'Norway' },
    // { value: 'OM', label: 'Oman' },
    // { value: 'PK', label: 'Pakistan' },
    // { value: 'PW', label: 'Palau' },
    // { value: 'PS', label: 'Palestine, State of' },
    // { value: 'PA', label: 'Panama' },
    // { value: 'PG', label: 'Papua New Guinea' },
    // { value: 'PY', label: 'Paraguay' },
    // { value: 'PE', label: 'Peru' },
    // { value: 'PH', label: 'Philippines' },
    // { value: 'PN', label: 'Pitcairn' },
    // { value: 'PL', label: 'Poland' },
    // { value: 'PT', label: 'Portugal' },
    // { value: 'PR', label: 'Puerto Rico' },
    // { value: 'QA', label: 'Qatar' },
    // { value: 'RE', label: 'Réunion' },
    // { value: 'RO', label: 'Romania' },
    // { value: 'RU', label: 'Russian Federation' },
    // { value: 'RW', label: 'Rwanda' },
    // { value: 'BL', label: 'Saint Barthélemy' },
    // { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    // { value: 'KN', label: 'Saint Kitts and Nevis' },
    // { value: 'LC', label: 'Saint Lucia' },
    // { value: 'MF', label: 'Saint Martin (French part)' },
    // { value: 'PM', label: 'Saint Pierre and Miquelon' },
    // { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    // { value: 'WS', label: 'Samoa' },
    // { value: 'SM', label: 'San Marino' },
    // { value: 'ST', label: 'Sao Tome and Principe' },
    // { value: 'SA', label: 'Saudi Arabia' },
    // { value: 'SN', label: 'Senegal' },
    // { value: 'RS', label: 'Serbia' },
    // { value: 'SC', label: 'Seychelles' },
    // { value: 'SL', label: 'Sierra Leone' },
    // { value: 'SG', label: 'Singapore' },
    // { value: 'SX', label: 'Sint Maarten (Dutch part)' },
    // { value: 'SK', label: 'Slovakia' },
    // { value: 'SI', label: 'Slovenia' },
    // { value: 'SB', label: 'Solomon Islands' },
    // { value: 'SO', label: 'Somalia' },
    // { value: 'ZA', label: 'South Africa' },
    // { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    // { value: 'SS', label: 'South Sudan' },
    // { value: 'ES', label: 'Spain' },
    // { value: 'LK', label: 'Sri Lanka' },
    // { value: 'SD', label: 'Sudan' },
    // { value: 'SR', label: 'Suriname' },
    // { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    // { value: 'SE', label: 'Sweden' },
    // { value: 'CH', label: 'Switzerland' },
    // { value: 'SY', label: 'Syrian Arab Republic' },
    // { value: 'TW', label: 'Taiwan, Province of China' },
    // { value: 'TJ', label: 'Tajikistan' },
    // { value: 'TZ', label: 'Tanzania, United Republic of' },
    // { value: 'TH', label: 'Thailand' },
    // { value: 'TL', label: 'Timor-Leste' },
    // { value: 'TG', label: 'Togo' },
    // { value: 'TK', label: 'Tokelau' },
    // { value: 'TO', label: 'Tonga' },
    // { value: 'TT', label: 'Trinidad and Tobago' },
    // { value: 'TN', label: 'Tunisia' },
    // { value: 'TR', label: 'Turkey' },
    // { value: 'TM', label: 'Turkmenistan' },
    // { value: 'TC', label: 'Turks and Caicos Islands' },
    // { value: 'TV', label: 'Tuvalu' },
    // { value: 'UG', label: 'Uganda' },
    // { value: 'UA', label: 'Ukraine' },
    // { value: 'AE', label: 'United Arab Emirates' },
    // { value: 'GB', label: 'United Kingdom of Great Britain and Northern Ireland' },
    // { value: 'US', label: 'United States of America' },
    // { value: 'UY', label: 'Uruguay' },
    // { value: 'UZ', label: 'Uzbekistan' },
    // { value: 'VU', label: 'Vanuatu' },
    // { value: 'VE', label: 'Venezuela (Bolivarian Republic of)' },
    // { value: 'VN', label: 'Viet Nam' },
    // { value: 'WF', label: 'Wallis and Futuna' },
    // { value: 'EH', label: 'Western Sahara' },
    // { value: 'YE', label: 'Yemen' },
    // { value: 'ZM', label: 'Zambia' },
    // { value: 'ZW', label: 'Zimbabwe' }
  ];



  function Checkout() {
    const user = useSelector(selectLoggedInUser)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const notification =((data) => {
        console.log(data)
        
        dispatch(
           updateUserAsync({...user,addresses:[...user.addresses,data]})
            ).then(() => {
           
          })
          .catch((error) => {
            console.error('Login error:', error);
            // Handle login error if needed
          });
          reset();
      });
      
    const items = useSelector(selectItems)
    const dispatch = useDispatch();
    const handleQuantity = (e, item) => {
        dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
      
        // Show SweetAlert2 notification
        Swal.fire({
          icon: 'success',
          title: 'Item Updated!',
          timerProgressBar: true,
          showConfirmButton: true,
          timer: 1000 // Close the notification after 1.5 seconds
        });
      };
      const [selectedAddress,setSelectedAddress]=useState(null)
      const [paymentMethod,setPaymentMethod]=useState('cash')
      const totalAmount =items.reduce((amount,item)=>discountedPrice(item.product)*item.quantity + amount,0)
      const totalItems =items.reduce((total,item)=>item.quantity + total,0)
      const handleRemove = (e, id) => {
        e.preventDefault();
      
        // Show SweetAlert confirmation dialog
        Swal.fire({
          title: 'Are you sure?',
          text: 'You are about to remove this item from your cart',
          icon: 'warning',
          
          showCancelButton: true,
          
            confirmButtonColor: '#007bff', // Set the background color of the confirm button
            cancelButtonColor: '#6c757d', // Set the background color of the cancel button
            confirmButtonText: 'Yes, remove it!',
            customClass: {
              confirmButton: 'confirm-button-class' // Apply custom class to the confirm button
            },
            // Inline CSS for the confirm button
            style: `
              .confirm-button-class {
                color: #ffffff; /* Set the text color of the confirm button to white */
              }
            `
        }).then((result) => {
          if (result.isConfirmed) {
            // Dispatch action to remove item from cart
            dispatch(deleteItemsFromCartAsync(id));
      
            // Show success message
            Swal.fire(
              {title: 'Removed!',
                text: 'The item has been removed from your cart.',
                icon: 'success',
                timer: 1000, // 3000 milliseconds = 3 seconds
                timerProgressBar: true,
                showConfirmButton: false}
            );
          }
        });
      };
      const handleAddress=(e)=>{
            setSelectedAddress(user.address[e.target.value] )
      }
      const handlePayment=(e)=>{
        setPaymentMethod( e.target.value )
      }
      const handlOrder=(e)=>{
        setPaymentMethod( e.target.value )
      }
      const [selectedCountry, setSelectedCountry] = useState(null);

  const countryChange = (event) => {
    setSelectedCountry(event.target.value);}
    return (
        <>
        {!items.length&& <Navigate to="/" replace={true}></Navigate>}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                <div className="lg:col-span-3 mt-10">
                    <form className="bg-white px-5 py-6 "  noValidate onSubmit={handleSubmit(notification)}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12 ">
                                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                    Personal Information
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Use a permanent address where you can receive mail.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("First-Name", { required: "First-Name is Required"})}
                                                id="first-name"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("last-name", { required: "Last-Name is Required"})}
                                                id="last-name"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register("email", { required: "email is Required"})}
                                                type="email"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="Phone"
                                                {...register("Phone", { required: "Phone Number is Required"})}
                                                type="tell"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Country
                                        </label>
                                        <select id="country" {...register("country", { required: "country is Required"})} value={selectedCountry} onChange={countryChange}>
                                         <option value="">Select a country</option>
                                               {countries.map((country) => (
                                             <option key={country.value} value={country.value}>
                                           {country.label}
                                          </option>
                                                                       ))}
                                     </select>
                                    </div>

                                    <div className="col-span-full">
                                        <label
                                            htmlFor="street-address"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("street-address", { required: "Street-Address is Required"})}
                                                id="street-address"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("city", { required: "city is Required"})}
                                                id="city"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="region"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("region", { required: "State/Province is Required"})}
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="pinCode"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register("pinCode", { required: "ZIP/Postal Code is Required"})}
                                                id="pinCode"
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save Address
                            </button>
                        </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Addresses</h2>

                                <p className="mt-1 text-sm leading-6 text-gray-600">Choose From Existing Addresses</p>

                                <ul role="list">
                                    {user.addresses.map((address,index) => (
                                        <li key={index} className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-grey-300">
                                           
                                            <div className="flex min-w-0 gap-x-4">
                                            <input  
                                                    onChange={handleAddress}
                                                    value={index}
                                                    name="address"
                                                    type="radio"
                                                    className="h-4 w-4  m-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                               

                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        {address.name}
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        {address.city}
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        {address.street}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Phone :{address.phone}</p>
                                                <p className="text-sm leading-6 text-gray-900">{address.PostalCode}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 space-y-10">
                                    <fieldset>
                                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                                            Payment Methods
                                        </legend>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Choose One.</p>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="cash"
                                                    name="payments"
                                                    onChange={handlePayment}
                                                    value='cash'
                                                    checked={paymentMethod ==="cash"}
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label
                                                    htmlFor="cash"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Cash
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="card"
                                                    name="payments"
                                                    onChange={handlePayment}
                                                    value="card"
                                                    checked={paymentMethod ==="card"}
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label
                                                    htmlFor="card"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Card Payment
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        
                    </form>
                </div>
                <div className="lg:col-span-2 bg-slate-150 ">
                    <>

<div className="mx-auto max-w-7xl px-0 sm:px-0 lg:px-0">
<div className="border-t bg-white mt-10 border-gray-200 px-4 py-6 sm:px-6">
       <h1 className="text-4xl my-2 font-bold tracking-tight text-gray-900 ">Cart</h1>
                        <div className="flow-root my-3 " >
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((item) => (
                              <li key={item.product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.product.thumbnail}
                                    alt={item.product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.product.id}>{item.product.title}</a>
                                      </h3>
                                      <p className="ml-4">${discountedPrice(item.product)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500">
                                      
                                      
                                    <label htmlFor="quantity" className="inline mr-4 text-sm font-medium leading-6 text-gray-900">
                                    Quantity
                                    </label> 
                                    <select onChange={(e)=>handleQuantity(e,item)} value ={item.quantity} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>



                                    </select>
                                    
                                    </div>

                                    <div className="flex">
                                      <button
                                      onClick={e=>handleRemove(e,item.id)}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p> $ {totalAmount}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Items in Cart</p>
                        <p> {totalItems} Items</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        
                                <div    onClick={handleOrder}>
                          Pay and Order
                                </div>
                        
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          
                          <Link to="/">

                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  
                  
     </div>
     </>
                </div>
            </div>
        </div>
        </>
    );
}

export default Checkout;

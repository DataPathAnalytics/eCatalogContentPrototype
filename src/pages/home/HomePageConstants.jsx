export const TABLE_COLUMNS_OPTIONS = [
  {
    title: 'Value definition/Name',
    dataIndex: 'Title',
    key: 'Title',
  },
  {
    title: 'Item Type / Lot',
    dataIndex: 'Item Type / Lot',
    key: 'Item Type / Lot',
  },
]

export const DETAILS_TABLE_COLUMNS_OPTIONS = [
  {
    title: 'Item Type / Lot',
    dataIndex: 'Item Type / Lot',
    key: 'Item Type / Lot',
  },
  {
    title: 'Trademark',
    dataIndex: 'Trade Mark',
    key: 'Trade Mark',
  },
  {
    title: 'Supplier',
    dataIndex: 'Provider',
    key: 'Provider',
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    width: '10%',
  },
]

export const DETAILS_EXLUDED_OPTIONS = [
  'Item Type / Lot',
  'Código do Article /',
  'Article /',
  'Chnm',
  'Public Contract Number',
  'Provider',
  'Url',
  'Title',
  'Tender',
  'Vat Rate (%)',
  'id',
  '_id',
  '_index',
  '_score',
  '_type',
]

export const DETAILS_MODAL_TABLES_OPTIONS = [
  {
    tableTitle: 'General Article Attributes',
    tableColumnsOptions: [
      {
        title: 'Item Type / Lot',
        dataIndex: 'Item Type / Lot',
        key: 'Item Type / Lot',
      },
      {
        title: 'Article Code',
        dataIndex: 'Código do Article /',
        key: 'Código do Article /',
      },
      {
        title: 'Article',
        dataIndex: 'Article /',
        key: 'Article /',
      },
      {
        title: 'CHNM',
        dataIndex: 'Chnm',
        key: 'Chnm',
      },
      {
        title: 'Public Contract Numbe',
        dataIndex: 'Public Contract Number',
        key: 'Public Contract Number',
      },
      {
        title: 'Supplier',
        dataIndex: 'Provider',
        key: 'Provider',
      },
    ],
  },
  // {
  //   tableTitle: 'Catalog-Specific Article Attributes',
  //   tableColumnsOptions: [
//       {
//         title: 'Vat Rate (%)',
//         dataIndex: 'Vat Rate (%)',
//         key: 'Vat Rate (%)',
//       },
//       {
//         title: 'Ce certificate number',
//         dataIndex: 'Ce Certificate Number',
//         key: 'Ce Certificate Number',
//       },
//       {
//         title: 'Entity that issued the CE certificate',
//         dataIndex: 'Entity That Issued The Ce Certificate',
//         key: 'Entity That Issued The Ce Certificate',
//       },
//       {
//         title: 'Issuing country',
//         dataIndex: 'Issuing Country',
//         key: 'Issuing Country',
//       },
//       {
//         title: 'Dimensions',
//         dataIndex: 'Dimensions',
//         key: 'Dimensions',
//       },
//       {
//         title: 'Weight',
//         dataIndex: 'Weight',
//         key: 'Weight',
//       },
//       {
//         title: 'System with control unit and electronic aerosol generator formed by perforated oscillatory membrane',
//         dataIndex: 'System With Control Unit And Electronic Aerosol Generator Formed By Perforated Oscillatory Membrane',
//         key: 'System With Control Unit And Electronic Aerosol Generator Formed By Perforated Oscillatory Membrane',
//       },
//       {
//         title: 'Inhalation time between ~ 2 To 7 minutes, depending on the drug and volume of solution',
//         dataIndex: 'Inhalation Time Between ~ 2 To 7 Minutes, Depending On The Drug And Volume Of Solution',
//         key: 'Inhalation Time Between ~ 2 To 7 Minutes, Depending On The Drug And Volume Of Solution',
//       },
//       {
//         title: 'Aerosol release in the first inspiratory phase',
//         dataIndex: 'Aerosol Release In The First Inspiratory Phase',
//         key: 'Aerosol Release In The First Inspiratory Phase',
//       },
//       {
//         title: 'High resistance and vibratory system incorporated in the mouthpiece',
//         dataIndex: 'High Resistance And Vibratory System Incorporated In The Mouthpiece',
//         key: 'High Resistance And Vibratory System Incorporated In The Mouthpiece',
//       },
//       {
//         title: 'Residual volume',
//         dataIndex: 'Residual Volume',
//         key: 'Residual Volume',
//       },
//       {
//         title: 'Complete system including battery, charger, dosing disc and mouthpiece',
//         dataIndex: 'Complete System Including Battery, Charger, Dosing Disc And Mouthpiece',
//         key: 'Complete System Including Battery, Charger, Dosing Disc And Mouthpiece',
//       },
//       {
//         title: 'Noise level',
//         dataIndex: 'Noise Level',
//         key: 'Noise Level',
//       },
//       {
//         title: 'Possibility of monitoring respiratory parameters',
//         dataIndex: 'Possibility Of Monitoring Respiratory Parameters',
//         key: 'Possibility Of Monitoring Respiratory Parameters',
//       },
//       {
//         title: 'Possibility to monitor adherence to treatment through embedded software',
//         dataIndex: 'Possibility To Monitor Adherence To Treatment Through Embedded Software',
//         key: 'Possibility To Monitor Adherence To Treatment Through Embedded Software',
//       },
//       {
//         title: 'Portability',
//         dataIndex: 'Portability',
//         key: 'Portability',
//       },
//       {
//         title: 'Compressor - electrical specifications: battery, rechargeable batteries or connected to the mains 100 to 200 W, 60/50 Hz',
//         dataIndex: 'Compressor - Electrical Specifications: Battery, Rechargeable Batteries Or Connected To The Mains 100 To 200 W, 60/50 Hz',
//         key: 'Compressor - Electrical Specifications: Battery, Rechargeable Batteries Or Connected To The Mains 100 To 200 W, 60/50 Hz',
//       },
//       {
//         title: 'Easy to clean and disinfect at home',
//         dataIndex: 'Easy To Clean And Disinfect At Home',
//         key: 'Easy To Clean And Disinfect At Home',
//       },
//       {
//         title: 'Equipment sterilization basket',
//         dataIndex: 'Equipment Sterilization Basket',
//         key: 'Equipment Sterilization Basket',
//       },
//       {
//         title: 'Other innovations included and made available by the service',
//         dataIndex: 'Other Innovations Included And Made Available By The Service',
//         key: 'Other Innovations Included And Made Available By The Service',
//       },
//       {
//         title: 'Número unitys fornecidas ao SNS (ano anterior)',
//         dataIndex: 'Número Unitys Fornecidas ao SNS (ano anterior)',
//         key: 'Número Unitys Fornecidas ao SNS (ano anterior)',
//       },
//       {
//         title: 'Trademark',
//         dataIndex: 'Trade Mark',
//         key: 'Trade Mark',
//       },
//       {
//         title: 'Equipment Model',
//         dataIndex: 'Model do Equipamento',
//         key: 'Model do Equipamento',
//       },
//       {
//         title: 'Value of vat in euro',
//         dataIndex: 'Value Of Vat In Euro',
//         key: 'Value Of Vat In Euro',
//       },
//       {
//         title: 'Proposed unit price plus vat',
//         dataIndex: 'Proposed Unit Price Plus Vat',
//         key: 'Proposed Unit Price Plus Vat',
//       },
//       {
//         title: 'Monitoring of treatment adherence and inhalation technique using data recorded on the device\'s card with computer reading',
//         dataIndex: '\'monitoring Of Treatment Adherence And Inhalation Technique Using Data Recorded On The Device\'\'s Card With Computer Reading\'',
//         key: 'monitoring Of Treatment Adherence And Inhalation Technique Using Data Recorded On The Devices Card With Computer Reading',
//       },
//       {
//         title: 'Medical Device Code',
//         dataIndex: 'Medical Device Code',
//         key: 'Medical Device Code',
//       },
// /////////////////////////
//       {
//         title: 'Portuguese Medical Device Nomenclature Code',
//         dataIndex: 'Portuguese Medical Device Nomenclature Code',
//         key: 'Portuguese Medical Device Nomenclature Code',
//       },
//       {
//         title: 'Presentation form',
//         dataIndex: 'Presentation Form',
//         key: 'Presentation Form',
//       },
//       {
//         title: 'Hypoallergenic',
//         dataIndex: 'Hypoallergenic',
//         key: 'Hypoallergenic',
//       },
//       {
//         title: 'Supplier Catalog Reference',
//         dataIndex: 'Supplier Catalog Reference',
//         key: 'Supplier Catalog Reference',
//       },
//       {
//         title: 'Date Of Issue Of The Cert Ce (dd / Mm / Yyyy)',
//         dataIndex: 'Date Of Issue Of The Cert Ce (dd / Mm / Yyyy)',
//         key: 'Date Of Issue Of The Cert Ce (dd / Mm / Yyyy)',
//       },
//       {
//         title: 'Nº Unitys por Embalagem',
//         dataIndex: 'Nº Unitys por Embalagem',
//         key: 'Nº Unitys por Embalagem',
//       },
//       {
//         title: 'Delivery Time (in Days)',
//         dataIndex: 'Delivery Time (in Days)',
//         key: 'Delivery Time (in Days)',
//       },
//       {
//         title: 'Payment Term (days)',
//         dataIndex: 'Payment Term (days)',
//         key: 'Payment Term (days)',
//       },
//       {
//         title: 'Minimum Order Note Value',
//         dataIndex: 'Minimum Order Note Value',
//         key: 'Minimum Order Note Value',
//       },
//       {
//         title: 'Product Datasheet',
//         dataIndex: 'Product Datasheet',
//         key: 'Product Datasheet',
//       },
//       {
//         title: 'Other Features',
//         dataIndex: 'Other Features',
//         key: 'Other Features',
//       },
//       {
//         title: 'Subcontracted Distribution On The Continent',
//         dataIndex: 'Subcontracted Distribution On The Continent',
//         key: 'Subcontracted Distribution On The Continent',
//       },
//       {
//         title: 'Subcontracted Distribution In Madeira',
//         dataIndex: 'Subcontracted Distribution In Madeira',
//         key: 'Subcontracted Distribution In Madeira',
//       },
//       {
//         title: 'Subcontracted Distribution In The Azores',
//         dataIndex: 'Subcontracted Distribution In The Azores',
//         key: 'Subcontracted Distribution In The Azores',
//       },
//       {
//         title: 'Additional Wood Costs',
//         dataIndex: 'Additional Wood Costs',
//         key: 'Additional Wood Costs',
//       },
//       {
//         title: 'Azores Additional Costs',
//         dataIndex: 'Azores Additional Costs',
//         key: 'Azores Additional Costs',
//       },
//       {
//         title: 'Delivery Time For Madeira',
//         dataIndex: 'Delivery Time For Madeira',
//         key: 'Delivery Time For Madeira',
//       },
//       {
//         title: 'Delivery Time For The Azores',
//         dataIndex: 'Delivery Time For The Azores',
//         key: 'Delivery Time For The Azores',
//       },
//       {
//         title: 'Number Of Units Provided To The Nhs (previous Year)',
//         dataIndex: 'Number Of Units Provided To The Nhs (previous Year)',
//         key: 'Number Of Units Provided To The Nhs (previous Year)',
//       },
//       {
//         title: 'Marketing Start Date',
//         dataIndex: 'Marketing Start Date',
//         key: 'Marketing Start Date',
//       },
//       {
//         title: 'Dm Type',
//         dataIndex: 'Dm Type',
//         key: 'Dm Type',
//       },
//       {
//         title: 'Risk Class Dm',
//         dataIndex: 'Risk Class Dm',
//         key: 'Risk Class Dm',
//       },
//       {
//         title: 'Manufacturer Reference',
//         dataIndex: 'Manufacturer Reference',
//         key: 'Manufacturer Reference',
//       },
//       {
//         title: 'Description Of Npdm Functionality',
//         dataIndex: 'Description Of Npdm Functionality',
//         key: 'Description Of Npdm Functionality',
//       },
//       {
//         title: 'Distributor',
//         dataIndex: 'Distributor',
//         key: 'Distributor',
//       },
//       {
//         title: 'Designation Of Npdm',
//         dataIndex: 'Designation Of Npdm',
//         key: 'Designation Of Npdm',
//       },
//       {
//         title: 'País Manufacturer DM',
//         dataIndex: 'País Manufacturer DM',
//         key: 'País Manufacturer DM',
//       },
//       {
//         title: 'Manufacturer',
//         dataIndex: 'Manufacturer',
//         key: 'Manufacturer',
//       },
//     ],
//   },
]
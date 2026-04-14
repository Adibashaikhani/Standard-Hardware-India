import erwPipeDetails from "@/assets/ERW PIPE DETAILS.jpg";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface ProductTable {
  title?: string;
  headers: string[];
  rows: TableRow[];
}

export interface SubCategory {
  id: string;
  name: string;
  description?: string;
  technicalSpecs?: ProductSpecification[];
  standards?: { code: string; description: string }[];
  mechanicalProperties?: ProductSpecification[];
  chemicalComposition?: ProductSpecification[];
  comparisonTable?: ProductTable;
  weightChart?: ProductTable;
  additionalTables?: ProductTable[];
  applications?: string[];
  features?: string[];
  images: string[];
  contentImage?: string;
  highlightsText?: {
    title: string;
    list: string[];
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "pipe-tubes",
    name: "Pipe And Tubes Division",
    subcategories: [
      {
        id: "erw-pipes",
        name: "MS, GI ERW Pipes",
        description: "ERW pipes are produced by rolling steel sheets and welding longitudinally using electric resistance. MS (Mild Steel) and GI (Galvanized Iron) ERW pipes are essential for plumbing, construction, and industrial fluid transport.",
        highlightsText: {
          title: "Leading suppliers/authorized distributors for:",
          list: [
            "JINDAL HISAR – HISAR PLANT",
            "JINDAL STAR – NAGOTHANE AND GHAZIABAD PLANTS",
            "TATA STEEL – TATA PIPES"
          ]
        },
        features: [
          "High dimensional accuracy",
          "Superior surface finish",
          "Uniform wall thickness",
          "Strong longitudinal weld",
          "High cost-effectiveness",
          "Excellent weldability for fabrication"
        ],
        technicalSpecs: [
          { label: "Manufacturing Process", value: "Electric Resistance Welding (ERW)" },
          { label: "Material", value: "Mild Steel / Carbon Steel" },
          { label: "Surface Finish", value: "Black / Galvanized (GI)" },
          { label: "Pipe Form", value: "Round" },
          { label: "End Type", value: "Plain End / Beveled / Threaded" },
          { label: "Standard Length", value: "6 m or 12 m" },
          { label: "Size Range", value: "½″ NB to 24″ NB" },
          { label: "Wall Thickness", value: "1.5 mm – 12 mm" },
          { label: "Outer Diameter", value: "21.3 mm – 610 mm" },
        ],
        standards: [
          { code: "IS 1239", description: "Mild Steel Tubes for Water & Gas Lines" },
          { code: "IS 3589", description: "Large Diameter ERW Pipes" },
          { code: "IS 1161", description: "Structural Steel Tubes" },
          { code: "IS 4923", description: "Hollow Structural Sections" },
          { code: "IS 4270", description: "Heavy Duty Steel Tubes" },
          { code: "ASTM A53", description: "Welded & Seamless Steel Pipe" },
          { code: "ASTM A795", description: "Fire Protection Pipes" },
          { code: "ASTM A135", description: "ERW Steel Pipe" },
          { code: "ASTM A500", description: "Structural Steel Tubes" },
          { code: "ASTM A106", description: "High Temperature Pipe" },
        ],
        mechanicalProperties: [
          { label: "Tensile Strength", value: "330 – 450 MPa" },
          { label: "Yield Strength", value: "210 – 360 MPa" },
          { label: "Elongation", value: "20 – 25 %" },
          { label: "Hardness", value: "HRB scale" },
        ],
        chemicalComposition: [
          { label: "Carbon (C)", value: "≤ 0.25%" },
          { label: "Manganese (Mn)", value: "0.60 – 1.50%" },
          { label: "Phosphorus (P)", value: "≤ 0.040%" },
          { label: "Sulfur (S)", value: "≤ 0.040%" },
        ],
        comparisonTable: {
          title: "Difference Between MS Pipe and GI Pipe",
          headers: ["Feature", "MS Pipe", "GI Pipe"],
          rows: [
            { "Feature": "Surface", "MS Pipe": "Black steel", "GI Pipe": "Zinc coated" },
            { "Feature": "Corrosion Resistance", "MS Pipe": "Low", "GI Pipe": "High" },
            { "Feature": "Application", "MS Pipe": "Structure, fabrication", "GI Pipe": "Plumbing, water lines" },
            { "Feature": "Cost", "MS Pipe": "Lower", "GI Pipe": "Higher" },
          ]
        },
        applications: [
          "Water pipelines",
          "Oil & gas pipelines",
          "Fire fighting systems",
          "Structural construction",
          "Mechanical fabrication",
          "Irrigation systems"
        ],
        images: ["/products/3.png", "/products/1.png", "/products/2.png"],
        contentImage: erwPipeDetails
      },
      {
        id: "seamless-tubes",
        name: "Seamless Tubes",
        description: "MS Seamless Tubes are carbon steel tubes manufactured without any welding seam. Produced from solid steel billets, they offer uniform strength, higher pressure resistance, and better performance under high temperature and corrosive conditions.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "MAHARASTRA SEAMLESS LTD. – MSL",
            "JINDAL SAW",
            "ISMT LTD"
          ]
        },
        technicalSpecs: [
          { label: "Product Type", value: "Carbon Steel Seamless Pipes & Tubes" },
          { label: "Manufacturing Process", value: "Hot Finished / Cold Drawn" },
          { label: "Size Range", value: "½″ NB – 20″ NB" },
          { label: "Outside Diameter", value: "10 mm – 508 mm" },
          { label: "Wall Thickness", value: "2.8 mm – 40 mm" },
          { label: "Length", value: "6 m – 12 m (standard)" },
          { label: "End Type", value: "Plain / Beveled / Threaded" },
          { label: "Surface Finish", value: "Black / Varnished / Coated" },
          { label: "Pipe Schedule", value: "SCH 10, 40, 80, 160, XS, XXS" },
        ],
        features: [
          "High pressure resistance",
          "High mechanical strength",
          "Fatigue resistant design",
          "High-temp performance",
          "Precise dimensional tolerances",
          "Extended service life in harsh conditions"
        ],
        standards: [
          { code: "ASTM A106", description: "High Temperature Seamless Pipe" },
          { code: "ASTM A53", description: "Welded & Seamless Steel Pipe" },
          { code: "ASTM A335", description: "Seamless Ferritic Alloy-Steel Pipe" },
          { code: "ASTM A333", description: "Seamless & Welded Pipe for Low Temp" },
          { code: "API 5L", description: "Line Pipe for Oil & Gas Industry" },
          { code: "API 5CT", description: "Casing and Tubing for Oil & Gas" },
        ],
        weightChart: {
          title: "MSL Seamless Pipe Weight Thickness Chart (Approx. SCH 40)",
          headers: ["Pipe Size", "OD (mm)", "SCH 10 (mm)", "SCH 40 (mm)", "SCH 80 (mm)", "Weight (kg/m)"],
          rows: [
            { "Pipe Size": "½″", "OD (mm)": "21.3", "SCH 10 (mm)": "2.11", "SCH 40 (mm)": "2.77", "SCH 80 (mm)": "3.73", "Weight (kg/m)": "1.27" },
            { "Pipe Size": "¾″", "OD (mm)": "26.7", "SCH 10 (mm)": "2.11", "SCH 40 (mm)": "2.87", "SCH 80 (mm)": "3.91", "Weight (kg/m)": "1.69" },
            { "Pipe Size": "1″", "OD (mm)": "33.4", "SCH 10 (mm)": "2.77", "SCH 40 (mm)": "3.38", "SCH 80 (mm)": "4.55", "Weight (kg/m)": "2.50" },
            { "Pipe Size": "1½″", "OD (mm)": "48.3", "SCH 10 (mm)": "2.77", "SCH 40 (mm)": "3.68", "SCH 80 (mm)": "5.08", "Weight (kg/m)": "4.05" },
            { "Pipe Size": "2″", "OD (mm)": "60.3", "SCH 10 (mm)": "2.77", "SCH 40 (mm)": "3.91", "SCH 80 (mm)": "5.54", "Weight (kg/m)": "5.45" },
            { "Pipe Size": "3″", "OD (mm)": "88.9", "SCH 10 (mm)": "3.05", "SCH 40 (mm)": "5.49", "SCH 80 (mm)": "7.62", "Weight (kg/m)": "11.29" },
            { "Pipe Size": "4″", "OD (mm)": "114.3", "SCH 10 (mm)": "3.05", "SCH 40 (mm)": "6.02", "SCH 80 (mm)": "8.56", "Weight (kg/m)": "16.07" },
            { "Pipe Size": "6″", "OD (mm)": "168.3", "SCH 10 (mm)": "3.40", "SCH 40 (mm)": "7.11", "SCH 80 (mm)": "10.97", "Weight (kg/m)": "28.26" },
            { "Pipe Size": "8″", "OD (mm)": "219.1", "SCH 10 (mm)": "3.76", "SCH 40 (mm)": "8.18", "SCH 80 (mm)": "12.70", "Weight (kg/m)": "42.55" },
            { "Pipe Size": "10″", "OD (mm)": "273.0", "SCH 10 (mm)": "4.19", "SCH 40 (mm)": "9.27", "SCH 80 (mm)": "12.70", "Weight (kg/m)": "60.30" },
            { "Pipe Size": "12″", "OD (mm)": "323.9", "SCH 10 (mm)": "4.57", "SCH 40 (mm)": "10.31", "SCH 80 (mm)": "14.27", "Weight (kg/m)": "80.80" },
            { "Pipe Size": "16″", "OD (mm)": "406.4", "SCH 10 (mm)": "4.78", "SCH 40 (mm)": "12.70", "SCH 80 (mm)": "21.44", "Weight (kg/m)": "124.30" },
            { "Pipe Size": "20″", "OD (mm)": "508.0", "SCH 10 (mm)": "5.54", "SCH 40 (mm)": "15.09", "SCH 80 (mm)": "23.01", "Weight (kg/m)": "186.00" },
          ]
        },
        applications: [
          "Water pipelines",
          "Oil & gas pipelines",
          "Fire fighting systems",
          "Structural construction",
          "Mechanical fabrication",
          "Irrigation systems"
        ],
        images: ["/products/4.png", "/products/6.png", "/products/5.png"],
      },
      {
        id: "boiler-tubes",
        name: "Boiler Tubes",
        description: "Boiler Tubes are specially manufactured to withstand high pressure and temperature. They are essential for energy equipment like steam pipelines, boilers, and superheaters, ensuring safe and long-term operation. ",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "MAHARASTRA SEAMLESS LTD. – MSL",
            "JINDAL SAW",
            "ISMT LTD"
          ]
        },
        features: [
          "High heat efficiency",
          "Internal pressure resistant",
          "High-temp stability",
          "Durable grain structure",
          "Corrosion resistant coatings",
          "Full compliance with ASTM/ASME standards"
        ],
        applications: [
          "Thermal Power Plants",
          "Boilers & Super Heaters",
          "Heat Exchanger units",
          "Steam Pipelines & Condensers",
          "Petrochemical refineries",
          "Industrial Heating systems"
        ],
        images: ["/products/10.png", "/products/8.png", "/products/7.png"],
        comparisonTable: {
          title: "Standard Tube Size, Thickness & Material Selection",
          headers: ["OD (mm)", "Wall Thickness (mm)", "Pressure Range (Bar)", "Temperature (°C)", "Material Type", "Typical Grade"],
          rows: [
            { "OD (mm)": "19.05", "Wall Thickness (mm)": "2.0 – 3.2", "Pressure Range (Bar)": "Up to 40", "Temperature (°C)": "Up to 400", "Material Type": "Carbon Steel", "Typical Grade": "ASTM A192" },
            { "OD (mm)": "25.4", "Wall Thickness (mm)": "2.5 – 4.0", "Pressure Range (Bar)": "30 – 60", "Temperature (°C)": "Up to 450", "Material Type": "Carbon Steel", "Typical Grade": "ASTM A210 A1" },
            { "OD (mm)": "31.8", "Wall Thickness (mm)": "3.0 – 5.0", "Pressure Range (Bar)": "40 – 80", "Temperature (°C)": "400 – 500", "Material Type": "Alloy Steel", "Typical Grade": "ASTM A213 T11" },
            { "OD (mm)": "38.1", "Wall Thickness (mm)": "3.2 – 6.0", "Pressure Range (Bar)": "60 – 100", "Temperature (°C)": "450 – 550", "Material Type": "Alloy Steel", "Typical Grade": "ASTM A213 T22" },
            { "OD (mm)": "50.8", "Wall Thickness (mm)": "4.0 – 8.0", "Pressure Range (Bar)": "80 – 120", "Temperature (°C)": "500 – 600", "Material Type": "Alloy Steel", "Typical Grade": "ASTM A213 T22 / T91" },
            { "OD (mm)": "63.5", "Wall Thickness (mm)": "5.0 – 10.0", "Pressure Range (Bar)": "100 – 140", "Temperature (°C)": "550 – 650", "Material Type": "Alloy Steel", "Typical Grade": "ASTM A213 T91" },
            { "OD (mm)": "76.2", "Wall Thickness (mm)": "6.0 – 12.0", "Pressure Range (Bar)": "120 – 160", "Temperature (°C)": "600 – 700", "Material Type": "Stainless Steel", "Typical Grade": "ASTM A213 TP304 / TP316" }
          ]
        }
      },
      {
        id: "octg-api-line",
        name: "OCTG and API Line Pipes",
        description: "Oil Country Tubular Goods (OCTG) consist of casing, tubing, and line pipe for oil and gas transportation. These pipes require high strength and corrosion resistance against CO2 and H2S. ERW OCTG pipes undergo rigorous testing including hydro tests and welding evaluation.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "MAHARASTRA SEAMLESS LTD. – MSL",
            "JINDAL SAW",
            "ISMT LTD"
          ]
        },
        features: [
          "High strength & durability",
          "CO2 & H2S resistant",
          "Rigorous hydro testing",
          "Premium connection options",
          "High collapse and burst resistance",
          "Passed strict welding and straightness checks"
        ],
        applications: [
          "Water pipelines",
          "Oil & gas pipelines",
          "Fire fighting systems",
          "Structural construction",
          "Mechanical fabrication",
          "Irrigation systems"
        ],
        images: ["/products/9.png", "/products/12.png", "/products/11.png"]
      }
    ]
  },
  {
    id: "pipe-fittings",
    name: "Pipe Fittings",
    subcategories: [
      {
        id: "forged-seamless",
        name: "Forged Seamless Fittings",
        description: "Common forged MS fittings used to connect, terminate, or change direction in industrial piping systems. Manufactured to withstand high pressure and ensure leak-proof performance.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "BHARAT FORGE",
            "SANT PIPE FITTINGS",
            "MARCEL PIPINGS"
          ]
        },
        features: [
          "High pressure integrity",
          "Maximum grain strength",
          "Leak-proof connections",
          "Precision machined ends",
          "Excellent fatigue and impact resistance",
          "Wide range of custom shapes and sizes"
        ],
        comparisonTable: {
          title: "Common Forged MS Fittings",
          headers: ["Fitting Type", "Description", "Sizes (NB)", "Material", "End Type", "Application"],
          rows: [
            { "Fitting Type": "Elbow (45° / 90°)", "Description": "Changes flow direction", "Sizes (NB)": "½″ – 24″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld / Threaded", "Application": "All industrial pipelines" },
            { "Fitting Type": "Tee (Equal / Reducing)", "Description": "Branch or combine flow", "Sizes (NB)": "½″ – 24″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld / Threaded", "Application": "Water, steam, oil lines" },
            { "Fitting Type": "Reducer", "Description": "Reduces pipe diameter", "Sizes (NB)": "½″ – 24″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld", "Application": "Pressure pipelines" },
            { "Fitting Type": "Cap / Plug", "Description": "Closes pipe ends", "Sizes (NB)": "½″ – 24″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld / Threaded", "Application": "Termination of lines" },
            { "Fitting Type": "Cross", "Description": "Divides flow in 4 directions", "Sizes (NB)": "½″ – 12″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld", "Application": "Industrial piping branches" },
            { "Fitting Type": "Stub End", "Description": "Used with lap joint flanges", "Sizes (NB)": "½″ – 24″", "Material": "MS / Carbon Steel", "End Type": "Butt Weld", "Application": "Flange joints" },
            { "Fitting Type": "Coupling / Union", "Description": "Connects two pipes", "Sizes (NB)": "½″ – 12″", "Material": "MS / Carbon Steel", "End Type": "Threaded / Butt Weld", "Application": "Pipe assembly" },
          ]
        },
        standards: [
          { code: "MS Pipes", description: "IS 1239 / ASTM A53" },
          { code: "Forged Fittings", description: "IS 1879 / ASTM A234" },
          { code: "IBR Fittings", description: "IS 3589 / ASME B16.9" },
          { code: "Flanges", description: "IS 6392 / ASME B16.5" },
        ],
        applications: [
          "Power Plants (Boiler piping)",
          "Oil & Gas refinery lines",
          "Chemical & Process industry",
          "Fire fighting systems",
          "Mechanical fabrication",
          "High-pressure steam pipelines"
        ],
        images: ["/products/15.png", "/products/13.png", "/products/14.png"]
      },
      {
        id: "ibr-non-ibr",
        name: "IBR and NON IBR Fittings",
        description: "Pipe fittings are classified as IBR (Indian Boiler Regulations) for high-pressure boilers and Non-IBR for general industrial piping. IBR fittings require mandatory certification and stringent testing.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "NISCO STEEL INDIA",
            "DYNAMIC FORGE AND FITTINGS ",
            "BHARAT FORGE"
          ]
        },
        features: [
          "Material traceability",
          "Full IBR compliance",
          "Mandatory NDT testing",
          "Steam safety certified",
          "Available in Carbon, Alloy, and Stainless Steel",
          "Engraved with IBR marking and pressure class"
        ],
        comparisonTable: {
          title: "Key Differences – IBR vs Non-IBR Fittings",
          headers: ["Feature", "IBR Fittings", "Non-IBR Fittings"],
          rows: [
            { "Feature": "Regulatory Standard", "IBR Fittings": "Indian Boiler Regulations (IBR)", "Non-IBR Fittings": "No IBR compliance needed" },
            { "Feature": "Usage", "IBR Fittings": "Boilers, high-pressure steam", "Non-IBR Fittings": "Water, oil, low pressure lines" },
            { "Feature": "Material Certification", "IBR Fittings": "Mandatory certified traceability", "Non-IBR Fittings": "Optional / per client" },
            { "Feature": "Testing", "IBR Fittings": "Hydrostatic, PMI, Radiography, Ultrasonic", "Non-IBR Fittings": "Standard hydrostatic / mechanical" },
            { "Feature": "Marking", "IBR Fittings": "Engraved IBR mark, manufacturer", "Non-IBR Fittings": "Manufacturer marking optional" },
            { "Feature": "Cost", "IBR Fittings": "Higher (stringent testing)", "Non-IBR Fittings": "Lower" },
          ]
        },
        additionalTables: [
          {
            title: "Common Types of IBR / Non-IBR Pipe Fittings",
            headers: ["Fitting Type", "Description", "Typical Sizes (NB)", "End Connection", "Application"],
            rows: [
              { "Fitting Type": "Elbow (90° / 45°)", "Description": "Change flow direction", "Typical Sizes (NB)": "½″ – 24″", "End Connection": "Butt Weld / Threaded", "Application": "Steam lines, water, oil" },
              { "Fitting Type": "Tee (Equal / Reducing)", "Description": "Branch or combine flow", "Typical Sizes (NB)": "½″ – 24″", "End Connection": "Butt Weld", "Application": "Boilers, industrial pipelines" },
              { "Fitting Type": "Reducer", "Description": "Reduce pipe diameter", "Typical Sizes (NB)": "½″ – 24″", "End Connection": "Butt Weld", "Application": "High pressure & general" },
              { "Fitting Type": "Cap / Plug", "Description": "Close pipe ends", "Typical Sizes (NB)": "½″ – 24″", "End Connection": "Butt Weld / Threaded", "Application": "Termination of lines" },
              { "Fitting Type": "Stub End", "Description": "Used with lap joint flanges", "Typical Sizes (NB)": "½″ – 24″", "End Connection": "Butt Weld", "Application": "Flange connections" },
            ]
          },
          {
            title: "Material & Standards",
            headers: ["Parameter", "IBR Fittings", "Non-IBR Fittings"],
            rows: [
              { "Parameter": "Material", "IBR Fittings": "Carbon Steel, Alloy Steel", "Non-IBR Fittings": "Mild Steel, Carbon, Stainless" },
              { "Parameter": "Standards", "IBR Fittings": "IS 3589, ASME B16.9", "Non-IBR Fittings": "IS 1879, ASTM A234, A403" },
              { "Parameter": "Surface Finish", "IBR Fittings": "Black, Varnished, Coated", "Non-IBR Fittings": "Black, Painted, Galvanized" },
            ]
          },
          {
            title: "Industrial Applications – IBR vs Non-IBR",
            headers: ["Industry", "IBR Fittings", "Non-IBR Fittings"],
            rows: [
              { "Industry": "Power Plants", "IBR Fittings": "Boiler piping, steam lines", "Non-IBR Fittings": "Cooling water lines, fuel pipelines" },
              { "Industry": "Oil & Gas", "IBR Fittings": "High-pressure process lines", "Non-IBR Fittings": "Low-medium pressure pipelines" },
              { "Industry": "Chemical / Process", "IBR Fittings": "High temperature / pressure lines", "Non-IBR Fittings": "General chemical piping" },
              { "Industry": "Water Supply", "IBR Fittings": "Steam condensate return", "Non-IBR Fittings": "Irrigation, municipal water supply" },
              { "Industry": "Mechanical Fabrication", "IBR Fittings": "Pressure vessels", "Non-IBR Fittings": "Hydraulic piping, machinery connection" },
            ]
          }
        ],
        applications: [
          "IBR – Boiler piping & high-pressure steam lines",
          "IBR – High-pressure process lines & vessels",
          "IBR – High temperature steam condensate return",
          "Non IBR – Cooling water lines & fuel pipelines",
          "Non IBR – Low-medium pressure water/oil lines",
          "Non IBR – Irrigation & municipal water supply"
        ],
        images: ["/products/16.png", "/products/17.png", "/products/18.png"]
      }
    ]
  },
  {
    id: "ball-valves",
    name: "Quality Ball Valves & Fluid Control",
    subcategories: [
      {
        id: "industrial-ball-valves",
        name: "Industrial Ball Valves",
        description: "Leading dealers of industrial ball valves including L&T Audco, Accura, and Vipul. L&T Audco valves (formerly Audco India Ltd) are manufactured by L&T Valves Limited. These high-performance valves use a floating-ball construction where line pressure ensures a tight seal and reliable shut-off.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "VIPUL QUALITY BALL VALVES - AHMEDABAD ",
            "LnT-AUDCO BALL VALVES - CHENNAI",
            "ACCURA ISO AND NIMBUS APPROVED BALL VALVES - AHMEDABAD"
          ]
        },
        technicalSpecs: [
          { label: "Size Range", value: "½″ to 12″ and above" },
          { label: "Pressure Class", value: "150 / 300 / 600" },
          { label: "Body Material", value: "Carbon Steel, Stainless Steel, Forged Steel" },
          { label: "Seat Material", value: "PTFE / Reinforced PTFE" },
          { label: "End Connections", value: "Threaded, Flanged, Socket Weld" },
          { label: "Design", value: "Floating Ball Design" },
        ],
        features: [
          "CS & SS material options",
          "Forged & Cast bodies",
          "2-Piece & 3-Piece design",
          "Full & Reduced bore",
          "Threaded, Flanged & Socket Weld Ends",
          "Trusted L&T Audco & Accura Quality"
        ],
        applications: [
          "Oil & Gas – Ball, gate, check valves used",
          "Power Plants – Globe, gate valves used",
          "Water Treatment – Gate, butterfly valves used",
          "Chemical Plants – Globe, ball valves used",
          "Food Industry – Stainless steel ball valves used"
        ],
        additionalTables: [
          {
            title: "Our Product Range",
            headers: ["Category Details", " ", "  "],
            rows: [
              { "Category Details": "Carbon Steel Ball Valves", " ": "Stainless Steel Ball Valves", "  ": "Forged Steel Ball Valves" },
              { "Category Details": "Two-Piece Ball Valves", " ": "Three-Piece Ball Valves", "  ": "Full Bore Ball Valves" },
              { "Category Details": "Reduced Bore Ball Valves", " ": "Flanged Ball Valves", "  ": "Threaded Ball Valves" },
            ]
          }
        ],
        comparisonTable: {
          title: "Industrial Valve Range Overview",
          headers: ["Valve Type", "Function", "Operation", "Typical Applications"],
          rows: [
            { "Valve Type": "Ball Valve", "Function": "On/off flow control", "Operation": "Quarter-turn", "Typical Applications": "Oil & gas, water systems" },
            { "Valve Type": "Gate Valve", "Function": "Isolation in large lines", "Operation": "Linear motion", "Typical Applications": "Industrial pipelines" },
            { "Valve Type": "Globe Valve", "Function": "Flow regulation", "Operation": "Linear motion", "Typical Applications": "Precision regulation" },
            { "Valve Type": "Check Valve", "Function": "Prevents backflow", "Operation": "Automatic", "Typical Applications": "Pumps, compressors" },
          ]
        },
        images: ["/products/19.png", "/products/20.png", "/products/21.png"]
      },
      {
        id: "pp-valves",
        name: "Parth Poly (PP) Valves",
        description: "Specialized thermoplastic (Polypropylene) valves from Parth Poly Valves. Ideal for chemical resistance and handling corrosive fluids where metallic valves may fail.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "PARTHIV PP BALL VALVES",
            "GOKUL POLY VALVES ",
            "PARTH POLYPROPYLENE VALVES"
          ]
        },
        features: [
          "Full bore / Low loss",
          "Lightweight durable body",
          "Chemical & Acid resistant",
          "Screw & Flange ends",
          "UV resistant Polypropylene material",
          "Zero maintenance thermoplastic design"
        ],
        comparisonTable: {
          title: "Parth PP Valve Types",
          headers: ["Valve Type", "Function", "Key Feature"],
          rows: [
            { "Valve Type": "PP Ball Valve", "Function": "On/off flow control", "Key Feature": "Full bore design" },
            { "Valve Type": "PP Butterfly Valve", "Function": "Large pipe flow control", "Key Feature": "Lightweight metal handle" },
            { "Valve Type": "PP Diaphragm Valve", "Function": "Leak-free control", "Key Feature": "Perfect for corrosive acids" },
            { "Valve Type": "PP Non-Return Valve", "Function": "Prevents backflow", "Key Feature": "Screw & Flange ends" },
            { "Valve Type": "PP Foot Valve", "Function": "Pump suction line", "Key Feature": "Keeps pump primed" },
            { "Valve Type": "PP Y-Type Strainer", "Function": "Filter solid particles", "Key Feature": "Protects pumps & valves" },
          ]
        },
        applications: [
          "Chemical Processing plants",
          "Acid & Corrosive fluid handling",
          "Water treatment & RO plants",
          "Agricultural irrigation",
          "Erection of chemical pipelines",
          "Textile & Dyeing industries"
        ],
        images: ["/products/22.png", "/products/23.png", "/products/24.png"]
      },
      {
        id: "sensors-transmitters",
        name: "Sensors & Transmitters",
        description: "Precision fluid monitoring components. These devices monitor conditions and convert readings into electrical signals for automated control systems.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "WAREE INSTRUMENTS",
            "BAUMER INDIA ",
            "WIKA INSTRUMENTS"
          ]
        },
        features: [
          "Real-time pressure monitoring",
          "Accurate flow rate measurement",
          "Continuous level sensing",
          "Precision temperature detection",
          "Standardized electrical signal output",
          "Integration with PLC/SCADA systems"
        ],
        technicalSpecs: [
          { label: "Sensor Types", value: "Pressure, Flow, Level, Temperature" },
          { label: "Output Signals", value: "4-20mA, 0-10V, Modbus" },
          { label: "Application", value: "Fluid condition monitoring" },
        ],
        applications: [
          "Automated process control",
          "Tank level monitoring",
          "Pipeline pressure regulation",
          "Water flow management",
          "Safety shut-off systems",
          "Industrial automation"
        ],
        images: ["/products/25.png", "/products/27.png", "/products/26.png"]
      }
    ]
  },
  {
    id: "fasteners",
    name: "Nut-Bolts, High Tension & Fasteners",
    subcategories: [
      {
        id: "industrial-fasteners",
        name: "Nut-Bolts & Fasteners",
        description: "Dealers and suppliers of Nut Bolts, Fasteners, Spanners, and High Tensile Nut Bolts. We provide a wide range of industrial hardware products used in fabrication, construction, engineering, and machinery industries. Dealers / Wholesale / Retail Supply Available.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "Nut Bolts: UNBRAKO",
            "HIGH TENSILE (Gr. 8.8-12.9)",
            "ALLEN BOLTS & STUDS",
          ]
        },
        features: [
          "Nut Bolts: UNBRAKO",
          "High Tensile (Gr. 8.8-12.9)",
          "Allen Bolts & Studs",
          "Full range of Washers & Threaded Rods",
          "Comprehensive Spanners & Hand Tools",
          "Dealers / Wholesale / Retail Supply"
        ],
        technicalSpecs: [
          { label: "High Tensile Grades", value: "8.8, 10.9, 12.9" },
          { label: "Materials", value: "MS, SS, GI (Galvanized)" },
          { label: "Supply Mode", value: "Wholesale / Retail / Dealers" },
        ],
        applications: [
          "Heavy Machinery assembly",
          "Industrial assemblies & fabrication",
          "Steel Structural construction",
          "Building and machinery maintenance",
          "General engineering projects",
          "Automotive & precision assembly"
        ],
        additionalTables: [
          {
            title: "Our Product Range",
            headers: ["Hardware Category", " ", "  "],
            rows: [
              { "Hardware Category": "Nut Bolts (MS / SS / GI)", " ": "Allen Bolts & Screws", "  ": "Anchor Fasteners" },
              { "Hardware Category": "High Tensile Bolts (Gr. 8.8 to 12.9)", " ": "Washers (Plain, Spring, Star)", "  ": "Spanners & Hand Tools" },
              { "Hardware Category": "Industrial Fasteners", " ": "Threaded Rods & Studs", "  ": "Machine Fasteners" },
            ]
          }
        ],
        images: ["/products/28.png", "/products/fastener-2.png", "/products/29.png"]
      },
      {
        id: "power-tools",
        name: "Hand & Power Tools",
        description: "Power hand tools are portable tools powered by electricity, batteries, compressed air, or hydraulics. They are used in industries, workshops, construction, and maintenance to perform tasks faster than manual tools.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "STANLEY POWER TOOLS - BLACK AND DECKEREASTMAN",
            "TAPARIA TOOLS",
            "EASTMAN CAST & FORGE",
          ]
        },
        features: [
          "Electric / Battery tools",
          "Efficient drilling",
          "Stanley / Bosch / Makita",
          "Industrial durability",
          "High-speed performance vs manual tools",
          "Available for Wholesale & Retail"
        ],
        technicalSpecs: [
          { label: "Trusted Brands", value: "STANLEY, BOSCH, MAKITA" },
          { label: "Power Source", value: "Electric, Cordless (Battery), Pneumatic" },
          { label: "Tool categories", value: "Drilling, Cutting, Fastening" },
        ],
        applications: [
          "Construction site drilling",
          "Mechanical maintenance workshops",
          "On-site mobile fabrication",
          "Industrial assembly & fitting",
          "Automotive repair & maintenance",
          "Precision engineering tasks"
        ],
        additionalTables: [
          {
            title: "Drilling Tools Category",
            headers: ["Tool Type", "Specific Examples"],
            rows: [
              { "Tool Type": "Electric Drills", "Specific Examples": "Electric Drill, Corded Hammer Drill" },
              { "Tool Type": "Cordless/Battery", "Specific Examples": "Cordless Drill, Impact Drill" },
              { "Tool Type": "Industrial/Specialized", "Specific Examples": "Magnetic Drill, Heavy Hammer Drill" },
            ]
          }
        ],
        images: ["/products/32.png", "/products/31.png", "/products/30.png"]
      }
    ]
  },
  {
    id: "construction-hardware",
    name: "Construction Hardware",
    subcategories: [
      {
        id: "pprc-c-pvc-pipes",
        name: "PPRC, C-PVC Pipes",
        description: "Comprehensive range of PPRC (Polypropylene Random Copolymer), CPVC (Chlorinated Polyvinyl Chloride), and PVC (Polyvinyl Chloride) pipes and fittings. Widely used in plumbing, industrial fluid transport, and irrigation pipelines.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "ASTRAL LTD",
            "FINOLEX INDUSTRIES ",
            "PRINCE PIPES AND FITTINGS"
          ]
        },
        features: [
          "High temp resistance",
          "Corrosion-free transport",
          "Heat fusion (Leak-proof)",
          "Solvent cement install",
          "Trusted brands: Astral, Supreme, Finolex, Prince",
          "Durable and maintenance-free service"
        ],
        comparisonTable: {
          title: "Key Differences: PPRC vs CPVC vs PVC",
          headers: ["Feature", "PPRC", "CPVC", "PVC"],
          rows: [
            { "Feature": "Temp Resistance", "PPRC": "High (Hot & Cold water)", "CPVC": "High (Hot & Cold up to 93°C)", "PVC": "Mostly Cold water" },
            { "Feature": "Installation", "PPRC": "Heat fusion welding", "CPVC": "Solvent cement", "PVC": "Solvent cement" },
            { "Feature": "Cost", "PPRC": "Higher", "CPVC": "Moderate", "PVC": "Lower" },
            { "Feature": "Strength", "PPRC": "Strong for pressure lines", "CPVC": "High", "PVC": "Moderate" },
            { "Feature": "Applications", "PPRC": "Plumbing systems", "CPVC": "Hot & Cold Plumbing, Industrial", "PVC": "Water, drainage, irrigation" },
          ]
        },
        additionalTables: [
          {
            title: "Common PPRC Pipe Fittings",
            headers: ["Fittings", "Usage Case"],
            rows: [
              { "Fittings": "Elbow, Tee, Socket", "Usage Case": "Direction and branching" },
              { "Fittings": "Union, End Cap, Reducer", "Usage Case": "Connection and termination" },
              { "Fittings": "MTA / FTA, Ball Valve", "Usage Case": "System control & transition" },
            ]
          }
        ],
        applications: [
          "Industrial chemical pipelines",
          "Hot & Cold water plumbing",
          "Municipal water supply",
          "Agricultural irrigation",
          "Drainage & Waste management",
          "Electrical conduits (PVC)"
        ],
        images: ["/products/33.png", "/products/34.png", "/products/35.png"]
      },
      {
        id: "paints",
        name: "Industrial Paints",
        description: "High-quality industrial paints and coatings designed for maximum durability, corrosion resistance, and surface protection in demanding environments.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "ASIAN PAINTS LTD",
            "SHERWIN WILLIAMS",
            "DULUX"
          ]
        },
        features: [
          "Premium industrial-grade coatings",
          "Advanced corrosion protection",
          "Wide variety of color options",
          "Quick-drying formulation",
          "High-performance surface adhesion",
          "Weather and chemical resistance"
        ],
        applications: [
          "Steel structure coating",
          "Industrial plant maintenance",
          "Mechanical equipment painting",
          "Anti-corrosive pipeline protection",
          "Fabrication and engineering projects",
          "Building and construction finishes"
        ],
        images: ["/products/36.png", "/products/37.png", "/products/38.png"]
      },
      {
        id: "safety-equipment",
        name: "Safety Equipment & PPE",
        description: "Comprehensive personal protective equipment (PPE) and safety gear ensuring worker safety and compliance with international health and safety standards.",
        highlightsText: {
          title: "Leading suppliers/authorized stockists for:",
          list: [
            "FULL BODY SAFETY GEAR",
            "OSHA / CE CERTIFIED",
            "HELMETS & SAFETY VESTS",
            "INDUSTRIAL SAFETY GLOVES",
          ]
        },
        features: [
          "Full body safety gear",
          "OSHA / CE certified",
          "Helmets & Safety vests",
          "Industrial safety gloves",
          "Respiratory and eye protection",
          "High-visibility safety apparel"
        ],
        applications: [
          "Construction site safety",
          "Industrial labor protection",
          "Chemical handling environments",
          "Workshop and fabrication safety",
          "Hazardous material protection",
          "Workplace health compliance"
        ],
        images: ["/products/safety-gear-1.png", "/products/safety-gear-2.png", "/products/safety-gear-3.png"]
      }
    ]
  }
];

import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import ProductScreen from './ProductScreen';
import BasketScreen from './BasketScreen';



export default function HomeScreen ({user}) {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const products = [
    [
          "WD-40 Specialist Dry PTFE 400ml",
          "WD-40 Specialist, Anti Friction Dry PTFE Lubricant with Smart Straw, Non-Stick Resists Dust, Dirt &amp; Oil, 400mlWD-40 Specialist, Anti Friction Dry PTFE Lubricant with Smart Straw, Non-Stick Resists Dust, Dirt & Oil, 400ml\nHIGH PERFORMANCE - Enhanced lubrication and protection. Nothing sticks to PTFE \u2013 perfect for metal, glass and plastics. Great for workplace machinery \u2013 axels, cranks, cogs, hydraulics, tracks and pulleys \u2013 and in the home, garden and outdoors\nLONG-LASTING \u2013 Because this lube contains PTFE, it sticks to the surface, repels water and withstands temperatures of -20C to +250C. Keeps tools and machinery working smoothly. Improves the life of garden tools and car parts. Superior lubrication reduces friction\n100s OF WORK & OUTDOOR USES \u2013  Protects against rust and corrosion. Sprays on easily with a clear protective coating for auto hinges, gears, sprockets, winches and chains, latches, door tracks, pulleys, cables, tow bars, and guide rails\nWD-40 SMART STRAW \u2013 never lose the straw again! Flip up for stream, down for spray. For a precise, powerful, narrow spray. 360\u00b0 valve allows for upright or upside down application, making every job possible\nThis solution contains PTFE which provides excellent lubrication and protection whilst reducing friction and wear, extending the life of tools and equipment.\nThis High Performance PTFE Lubricant can be used for a range of applications. It keeps tools and machinery working smoothly, and improves the life of everything from garden tools to car parts. Dries to a clear film that resists dirt, dust and oil, for enhanced lubrication and protection.\nPremium solution contains PTFE which provides enhanced lubrication, leaving a dry clear film that won\u2019t attract dirt, dust or oil. It\u2019s quick drying and also great as a mould-release agent.\nIt\u2019s safe to use in environments from -20\u00b0C to 250\u00b0C, and suitable for use on all metals, glass and plastics. An ideal addition to the garage, workshop, factory, or garden shed.\nThe WD-40 Specialist line is an exciting range of products specifically designed to meet the needs and solving those more demanding jobs that just need to be done right. Add WD-40 Specialist products to your toolbox for all those jobs requiring a specific solution.\n",
          "https://dam-assets.apps.travisperkins.group/o351e85/GPID_1100343243_IMG_00.jpg?width=450&height=300",
          "\u00a39.65 "
    ],
    [
          "14 x 6 Power Apex Summerhouse With 6ft Side Store",
          "14x6 Power Apex Summerhouse Combi including 6ft Side StoreThis Power summerhouse has responsibily sourced, high grade slow-grown timber renowned for its strength and resistance to warping\nHeavy duty framing with corner bracing on all wall panels\n12mm thick shiplap tongue and groove, including the roof and floor\nToughened Glass with PVC window sills\nHigh performance polyester backed waterproof felt\n12mm thick shiplap tongue and groove, including the roof and floor\n",
          "https://dam-assets.apps.travisperkins.group/x7l100l/GPID_1100989254_IMG_00.jpg?width=450&height=300",
          "\u00a31,824.00 "
    ],
    [
          "Wienerberger Engineering Brick Red Smooth Class B 73mm - Pack of 368",
          "A red smooth functional perforated engineering Facing Brick suitable for manholes or where a non decorative wall is required, colours can vary, so not ideal for use where consistent colouring or texture is required.Selected for its technical properties\nCan be used below DPC\nLow Salt Content - S2\nCan be recycled at the end of their use\nRange availability is dependent on local demands and not all products are stocked at all branches\nOccasionally there can be a lead time on bricks from the manufacturer. If this is the case, we will let you know as soon as possible\n",
          "https://dam-assets.apps.travisperkins.group/lGvrL/GPID_1000075983_IMG_00.jpg?width=450&height=300",
          "\u00a3604.99 "
    ],
    [
          "Mira Activate Ceiling Fed (Pumped for Gravity) 1.1903.090",
          "Create your perfect shower experience with advanced connected features \u2013 including app control, and our intuitive digital controller. Ceiling-fed supply, with integrated pump for low pressure water systems.App and voice- enabled digital shower with stylish LED temperature and flow display.  Configure and control the shower from your phone using the app or using the intelligent digital controller\nSuitable for High Pressure Water Systems Only\nDigital interface, app or Alexa-enabled controls\n4-Spray pattern push -button Mira Switch showerhead, Retrofits the Aqualisa Quartz\nLED temperature and flow display,Pre-assembled fittings kit for ease of installation\nThermostatic Temperature stability with Adjustable  Max. Temperature Stop,Slide bar mounted digital controller requires no drilling through tiles,Suitable for Low Pressure Water Systems Only\nMinimum maintained pressure: Pumped: 0.01 bar (10 cm head);High Pressure: 1 bar (10 metre head)\nMaximum maintained pressure: Pumped: 1.0 bar (10 metre head); High Pressure: 5.0 bar (50 metre head)\nMaximum static pressure: Pumped: 1.0 bar (10 metre head); High Pressure: 10.0 bar (100 metre head)\nFlow rate: Adjustable flow rate from 6 l/min to 12 l/min at 0.1 bar (Pumped for Gravity); 4 l/min to 16 l/min at 1 bar (High Pressure)\n",
          "https://dam-assets.apps.travisperkins.group/xp840em/GPID_1100902115_IMG_00.jpg?width=450&height=300",
          "\u00a3888.72 "
    ],
    [
          "ROM Concrete Reinforcing Steel Bar High Yield Rebar T16 3000mm x 16mm",
          "This concrete rebar from ROM is a standard reinforcing steel rod designed for use as a tension device in concrete structures to strengthen and hold the concrete together. Versatile and durable, it can be cut to the desired size and welded into position and set in place before concrete is poured.ROM Concrete Reinforcing Bar High Yield T16 3m x 16mm commonly used with hollow dense concrete blocks. It's solid reinforcing steel structure provides assurance for a perfect outcome. \nManufactured from 98 percent recycled material\nHigh quality steel reinforcement for cast concrete application\nFor reinforcing concrete in floors and other structures\nIncreases the overall strength of the structure\nEasily cut to the desired length\nConforms to Grade 500C to BS4449:2005\n",
          "https://dam-assets.apps.travisperkins.group/v6ww3m3/GPID_1000391596_IMG_00.jpeg?width=450&height=300",
          "\u00a326.82 "
    ],
    [
          "Mira Activate Single Rear Fed HP 1.1903.087",
          "Create your perfect shower experience with advanced connected features \u00ef\u00bf\u00bd including app control, and our intuitive digital controller. Rear-fed supply, designed for high pressure water systems.App and voice- enabled digital shower with stylish LED temperature and flow display.  Configure and control the shower from your phone using the app or using the intelligent digital controller\nSuitable for High Pressure Water Systems Only\nDigital interface, app or Alexa-enabled controls\n4-Spray pattern push -button Mira Switch showerhead\nLED temperature and flow display,Wall mounted digital controller gives a clean, stylish finish\nThermostatic Temperature stability with Adjustable  Max. Temperature Stop,Retrofits the Aqualisa Quartz\n",
          "https://dam-assets.apps.travisperkins.group/xgywmwg/GPID_1100902113_IMG_00.jpg?width=450&height=300",
          "\u00a3800.40 "
    ],
    [
          "Woodpecker Stratex Brecon Flooring Shoreline Oak - Pack Size 2.20m2",
          "Our Brecon Stratex flooring range offers incredibly strong and stable boards with an extremely durable, embossed woodgrain-effect vinyl upper layer and built in underlay. Offering a wide range of highly realistic wood finishes, Brecon is a stylish and practical solution for even the most demanding rooms in the house.Waterproof\nNo expansion gap needed\nBuilt-in underlay\nHigh-performance floor in a wide range of realistic wood-effect finishes\nSuitable for use over underfloor heating\nGlueless, easiloc joints and boards can be scored and snapped for easy fitting experience\n",
          "https://dam-assets.apps.travisperkins.group/o503rrp/GPID_1100752382_IMG_00.jpg?width=450&height=300",
          "\u00a387.83 "
    ],
    [
          "External Pre Finished Oak Veneer Slimline Bifold Door Set 3000 x 54mm",
          "These high-spec BiFold doors supplied fully factory finished, durable and attractive.  These 54mm thick engineered hardwood doors offer stability along with slim sightlines to maximise your view when open or closed.Slimmer stiles and rails for uninterrupted views and maximum light penetration.  Can be installed to open to the left or right, with a single daily access door for ease.\nLow E Coated 24mm double glazed units giving excellent thermal efficiency, reducing heat loss and reflecting interior heat back into the room.  This will help to reduce monthly bills and the size of your carbon footprint.\nRobust 54mm thick doors constructed from slow-grown hardwood for enhanced stability and durability.  3 point Vectis lock with jumbo hooks on main access door and additional drop bolts for enhanced security.\nTop hung roller system for smooth effortless operation with stainless steel hardware and chrome handles supplied as standard, designed to compliment any d\u00e9cor.  Requires a lintel above to hold the weight of the door set.\n10 Year manufacturing fault guarantee for peace of mind.  Details are available in the home owner's manual\nBiFold door set includes doors, frame, sill, folding hardware, tracks, locks, handles, frame fixings, lintel fixings and easy to follow assembly instructions.  Supplied with virtually all components pre-machined for ease of assembly.\nRequired opening is a total of 10mm bigger than the outer frame dimensions shown in both height and width\nReturns may be subject to a collection charge\n",
          "https://dam-assets.apps.travisperkins.group/v96eq3z/GPID_1000192465_IMG_01.jpg?width=450&height=300",
          "\u00a34,794.61 "
    ],
    [
          "Armour Up Flexigrip Abrasion Resistant Gloves Large (6 Pack)",
          "Lightweight glove with very high dexterity to protect against rough surfaces. These gloves conform to EN388:2003.Lightweight glove with very high dexterity\nSeamless liner for better fit and good durabilty\nHigh grip and abrasion qualities\nIdeal for inside where dexterity is required\nEN388:2003\nMade of nitrile which is a synthetic rubber. It has higher abrasion resistance\n",
          "https://dam-assets.apps.travisperkins.group/N48nw/GPID_1000573122_IMG_00.jpg?width=450&height=300",
          "\u00a321.88 "
    ],
    [
          "Knauf Loft Roll 44 Combi Cut 200mm 1140 x 6.00m 6.84m2 Per Pack",
          "An A1 Non-Combustible Glass Mineral Wool roll, manufactured using Knauf Insulation's unique ECOSE\u00ae Technology, and designed specifically for use in cold lofts where pitched roofs are insulated at ceiling level.Combi-cut products are supplied partially perforated, providing the flexibility to be used between joists or used uncut as a full-width roll, maximising on-site efficiency.\nManufactured in long lengths to allow quick and simple installation maximising on-site efficiency.\nCompression packed and lightweight for easy handling and moving around a site.\n",
          "https://dam-assets.apps.travisperkins.group/oe0ywn7/GPID_1100803751_IMG_00.jpg?width=450&height=300",
          "\u00a357.95 "
    ],
    [
          "Energizer Alkaline Power C E93 BP Batteries 2 Pack",
          "Energizer Alkaline Power Batteries are a great choice for your low drain day-to-day electronic devices. At a lower cost than premium alternatives, this cost-effective battery benefits from the Energizer brand, at a much lower price.Long lasting energy\nGreat resistance to leakage\nReliable, up to 10 years shelf life in storage ( AA/AAA / C/ D )\nIdeal for everyday devices used at work or at home.\nGreat Value and Performance\n",
          "https://dam-assets.apps.travisperkins.group/BBgYr/GPID_1100629606_IMG_00.png?width=450&height=300",
          "\u00a36.60 "
    ],
    [
          "Bostik Cementone Jointing Compound Natural 15kg",
          "Wide jointing compound for paths and patiosBostik Wide Jointing Compound for paths & patios is a blend of polymers and sand that bind together on contact with air, providing an easy to use alternative to conventional cement mortar.\nOnce cured it forms a solid joint, which will resist weed growth and sand loss from power washing or mechanical cleaning. Bostik Wide Jointing Compound is a single component and does not require mixing or special tools.\nIt's suitable for most types of domestic paving including natural stone, concrete, clay and terracotta in joints 5mm to 30mm in width. It is water permeable allowing the paving to drain and, when cured, is unaffected by salt and freezing conditions.\n",
          "https://dam-assets.apps.travisperkins.group/MVd4z/GPID_1010005661_IMG_00.jpg?width=450&height=300",
          "\u00a348.52 "
    ],
    [
          "Ulti-Mate\u00ae Stick-Fit\u00ae Wood Screws 5.0 x 70mm Qty 400",
          "The Ulti-Mate\u00ae Wood Screw is a trade-quality, high-performance woodscrew that can be used for fixing hardwood, softwood, man-made timber boards (e.g. MDF, plywood, chipboard &amp; OSB), and sheet metal. 2x high-quality Stick-Fit driver bits are included in every single trade tub of Ulti-Mate Wood Screws. The screws also feature a type-17 point to drive through the hardest timber, a double-angle countersunk head for a neat finish and a wide, deep single thread for rapid insertion and strong holding power.Patented Stick-Fit drive system allows smooth, stable driving and one-handed installation\n2x high-quality Stick-Fit Driver Bits included in every Trade Tub\nDrive system 100% compatible with POZI and Phillips driver bits\nType-17 'slash' point to drive through the hardest timber\n",
          "https://dam-assets.apps.travisperkins.group/o50l3g4/GPID_1100975191_IMG_00.jpg?width=450&height=300",
          "\u00a331.50 "
    ],
    [
          "McAlpine TSG2T6SS Stainless Steel Square Shower Gully 110 x 130mm",
          "A stainless steel tile cover gully ideal for domestic wet rooms, Lifetime Homes, disabled adaptations, student accommodation, bathroom pods, hotels, hospitals and sport and leisure facilities. For use with sheet flooring.75mm water seal\n2 inch BS EN 1329-1:2000 solvent weld horizontal outlet\nSupplied with 2 x 1 1/2 inch socket reducer\nManufactured in ABS to the highest quality\nOverall height 130mm\nFlow rates of 48 litres per minute exceed the minimum requirement of EN 1253-2:2003 and are variable dependent on the cover plate used\nComes with polished stainless steel clamp ring and cover plate with securing screws\n",
          "https://dam-assets.apps.travisperkins.group/v4411n3/GPID_1000017829_IMG_00.jpg?width=450&height=300",
          "\u00a3124.90 "
    ],
    [
          "DeWalt DCK665P3T 18V Xr Compact Wood Working Kit",
          "DeWalt 18v XR Brushless 6 Kit comprises of DCD796 2nd Generation Brushless Combi, DCP580 Brushless Planer, DWV9390 Planer Dust Bag, DCS355 Brushless Oscillating Multi-Tool, DCS391 Circular Saw, DCS331 Jigsaw, DCL050 Led Worklight, 3 x 5.0Ah XR Li-Ion Batteries, Multi-Voltage Charger and 2 x TSTAK VI Deep Kit Boxes.DCS355 Brushless Oscillating Multi-Tool, Brushless motor delivers up to 57% more runtime over brushed motors. Dua;l grip variable speed trigger provides great application speed control.\nDCS331 Jigsaw, Powerful & Highly efficient DEWALT motor with replaceable brushes. Inteligent variable speed trigger & lock-off switch with tool-free adjsutable shoe from 0\u00a1-45\u00a1 with 3 position pendulum action.\nDCL050 LED handheld torch, 250-500 lumen output and upto 10 hours runtime on 4.0Ah XR Battery.\nCompatible with DEWALT 18V XR range and TSTAK Kit boxes\n",
          "https://dam-assets.apps.travisperkins.group/k4vVg/GPID_1000789041_IMG_00.jpeg?width=450&height=300",
          "\u00a31,004.63 "
    ],
    [
          "Slot Down Compost Bin Pressure Treated",
          "If you are an avid gardener, the Slot Down Compost Bin allows you to make use of your kitchen scraps, and the slot down design makes accessing your compost much easier than a regular bin.\nThis composter holds approximately 650L of green waste and the rustic nature of the rough sawn boards mean it will blend in well with any garden setting. All timber used has been Pressure Treated to give a 15 year guarantee against rot and fungal decay, which is essential when in contact with moisture.\nIf you would like to extend your composter, why not use our Slot Down Compost Bin Extension Kit to add one, or more, bin sections.\nDelivered to you flat packed with easy to follow step-by-step instructions and all the fixings you need for a simple build.The Forest Slot Down Compost Bin is ideal for the serious gardener and can also be added to with extension kits\nManufactured from Pressure Treated rough sawn boards\nSupplied with a 15 year guarantee against rot and fungal decay, which is essential when the timber is in constant contact with the damp\nHolds approximately 650L of compost\nTo access the compost simply remove the individual side boards\nExtension kit available\nDelivered flat packed with fixings and instructions for self-assembly\n",
          "https://dam-assets.apps.travisperkins.group/laJrX/GPID_1000782296_IMG_00.jpg?width=450&height=300",
          "\u00a3200.00 "
    ],
    [
          "Evo-Stik Sticks Like Turbo White 290ml",
          "Fast setting, universal, high performance grab adhesive.Can be used on a wide range of building materials including; vertical bonding of heavy items such as brick, stone, and ceramic tiles without support\nIt provides excellent adhesion to most building materials including PVC, metal, wood, polyurethane, steel, aluminium, stone, glass and mortar\nUsed both internally and externally and is suitable for roof tiles, skirting boards, panels, siding materials and plasterboard rails\nFast setting providing a very quick build-up of strength\nExcellent adhesion and initial grab\nWide service temperature range\nCures in 15 minutes\nSolvent-free\nCan be painted\nHolds up to 300kg\n",
          "https://dam-assets.apps.travisperkins.group/l32o2/GPID_1000781890_IMG_00.jpg?width=450&height=300",
          "\u00a311.03 "
    ],
    [
          "Natural Paving Classicstone Golden Fossil Paving Project Pack 18.9m2",
          "The Classicstone Golden Fossil paving project pack by Natural Paving is a high-quality sandstone with a lightly riven textured surface. Ideal for creating random paving patterns in patios and pathways, this garden paving unit features random golden fossil prints for a contemporary finish. Calibrated to the desired thickness, it is quick and easy to install.Ultimate in timeless traditional flagstones\nEach hand finished and dressed flagstone has a rustic surface that inspires a warm and natural, old world look\nProject packs are ideal for creating random designs\nAll flagstones have been machine finished to a nominal thickness\nUseful for where weight and/or a limited depth for laying the product is an issue\nHas a base layer of soft yellow, buff, cream and white tones, creating an ideal platform for the splashes of rich oranges and dark fossil leaf bursts\nPlease note that all sizes are nominal\nEach Pack Contains: 16 x 900x600, 16 x 600x600, 16 x 600x290, 12 x 290x290\n",
          "https://dam-assets.apps.travisperkins.group/5VAoA/GPID_1000725783_IMG_00.jpeg?width=450&height=300",
          "\u00a31,442.92 "
    ],
    [
          "16 x 18 Power Chalet Log Cabin Centre Door",
          "Power Sheds 16 x 18ft Chalet Notched Logs Log Cabin - Central DoorsEach log cabin uses uPVC Double Doors in Anthracite Grey and uPVC 'Tilt and Turn' Opening Windows. All glass is both toughened and double glazed.\nEvery door and window has a 5-point locking mechanism for added security.\nThe roof of each log cabin uses an innovative EPDM rubber roofing system which has a 50-year life expectancy. This also includes a gutter edge drip plate to allow rainwater to run off every side of the cabin.\nOur cabin is under 2.5m to the ridge of the building \u00e2\u20ac\u201c under the threshold of most planning permission restrictions. We use 145mm roof purlins to ensure the strength and rigidity of the log cabin isn\u00e2\u20ac\u2122t compromised.\nThe walls of the log cabin use 44mm thick high grade Scandinavian Timber. The floors and roofs use tongue and groove boards and tanalised timber bearers are provided to lift the log cabin further off the ground to protect the flooring.\nFeatures such as external sills on all windows and an aluminium low threshold sill on the doors are provided to add extra functionality as well as improve the aesthetic of the building. We also include Burford style skirting for the perfect finish.\nThe 44mm interlocking logs are enhanced by our innovative notching system. This allows you to build your log cabin with ease. Detailed instructions, instructional installation videos and all fixings are provided, along with additional telephone and email support if required.\n",
          "https://dam-assets.apps.travisperkins.group/oyy2mey/GPID_1100934027_IMG_00.jpg?width=450&height=300",
          "\u00a37,799.00 "
    ],
    [
          "14 x 8 Power Apex Double Door Security Shed",
          "14x8 Power Apex Double Door Security ShedThis Power security shed has responsibily sourced, high grade slow-grown timber renowned for its strength and resistance to warping\nHeavy duty framing with corner bracing on all wall panels\n12mm thick shiplap tongue and groove, including the roof and floor\nToughened Glass with PVC window sills\nHigh performance polyester backed waterproof felt\n12mm thick shiplap tongue and groove, including the roof and floor\n",
          "https://dam-assets.apps.travisperkins.group/oe0d571/GPID_1100989037_IMG_00.jpeg?width=450&height=300",
          "\u00a31,619.00 "
    ],
    [
          "47mm x 175mm x 4.2m Regularised Treated Sawn Timber C24",
          "Regularised (consistent dimensions) by planing all round with 'eased' (rounded) corners for comfortable handling. Our regularised carcassing finishes 2mm off nominal thickness and 5mm off nominal width.High Pressure treated with Tanalith 'E' (or similar)\nKiln dried to help improve stability and straightness\nStrength graded to C16/C24 for known structural performance\nIt is important that all cut ends are re-sealed with a proprietary treatment\nAll of our softwoods are responsibly sourced\nAdditional lengths may be available - please contact us for further information\n",
          "https://dam-assets.apps.travisperkins.group/MVPgy/GPID_1000020367_IMG_00.jpeg?width=450&height=300",
          "\u00a329.94 "
    ],
    [
          "Rock Fall Michigan Navy Safety Boot Size 12",
          "The RF112 Michigan is a highly appealing groundbreaking mid cut boot that has been designed to be sustainable to its core. It features recycled plastic bottle upper textiles, lining and lace materials providing outstanding comfort.\r\n\r\nWe say groundbreaking due to the eco credentials that bring no compromise to in wear performance.\r\n\r\nIt has a 100% non metallic construction, including a fibreglass toecap and composite midsole.100% Non-Metallic Construction\nAnti-Static\nWater Repellent Upper\nProtective Midsole & Toecap\nSRC Slip Rated\nOil Resistant\nSustainable\n",
          "https://dam-assets.apps.travisperkins.group/om580y4/GPID_1100911465_IMG_00.jpg?width=450&height=300",
          "\u00a352.69 "
    ],
    [
          "JB Kind City Interior Tinted Glazed Door Art Deco Style Panels Black Painted Finish 1981 x 762 x 35mm",
          "Contemporary industrial style black interior door with tinted glass panels.Black painted finish\nIndividual glass panes\nSolid construction\nTinted flat safety glass\nSuitable for standard handles, hinges and latches\n",
          "https://dam-assets.apps.travisperkins.group/x21j79n/GPID_1100676304_IMG_00.jpg?width=450&height=300",
          "\u00a3526.02 "
    ],
    [
          "Travis Perkins Rockingham Oak 5 Groove Glazed Door 1981 x 838 x 35mm",
          "Oak veneer glazed doors featuring a distinct five-panel square-groove design with a large, central glazed panel that can fit into any style of home. Supplied ready to paint, stain or varnish.This door has a five-panel square-groove design with a large central obscure glazed panel that will suit both modern and traditional homes\nConstructed from mixed materials including timber, real wood veneers and man-made materials\nEngineered composite core construction for greater resistance to warping, twisting and splitting than traditional timber doors\nProduct supplied unfinished, suitable finishing products include, Ronseal Trade Polyurethane Varnish and Osmo door oil\nExtra thick lipping allows you to trim up to 20mm in width and 20mm in height from the door\n3 x 76mm or 100mm butt hinges should be fitted to this door. Door furniture is sold separately\nThe central light features obscured glass. Certified toughened glass to give you peace of mind\nStandard Panel and Fire Door versions in this range are also available\nThis is a natural timber product and variances in texture, colour and grain may be apparent\n",
          "https://dam-assets.apps.travisperkins.group/ym2Bx/GPID_1000474766_IMG_00.jpeg?width=450&height=300",
          "\u00a3177.32 "
    ],
    [
          "Tobermore Textured Concrete Paving Slabs in Natural 450x450x35mm Pack of 30",
          "Textured paving slabs have a unique granular surface which gives a natural aged appearance. Textured slabs are available in a range of soft subtle colours making these paving slabs both stylish and hard wearing. Create a spectacular effect by pairing them with bands of Tegula Setts.PrimeTop: Manufactured with Tobermore's superb hard-wearing surface layer\nSuper stylish hard-wearing textured finish\nVibrant long-lasting colours\nNatural aged appearance\nEf-stop: vapour-cured for 12 hours to virtually eliminate efflorescence\nCompliment with bands of Tegula Setts to create a beautiful feature for your driveway or patio\nExtremely low slip/skid risk\n25 year guarantee on the structural integrity of all Tobermore block paving products\n",
          "https://dam-assets.apps.travisperkins.group/zA8E6/GPID_1000758060_IMG_00.jpg?width=450&height=300",
          "\u00a3303.84 "
    ],
    [
          "Tobermore Hydropave Pedesta Paving Slab Natural Hand Lay 200 x 100 x 60 mm",
          "Our Hydropave Pedesta permeable block paving has an attractive brick shape and functions as a SuDS paving system. Available in four colours, ranging from warm Brindle to sandy Bracken and classic Charcoal, this permeable block paving provides you with plenty of scope to create paving patterns and designs.Superb hard-wearing smooth surface\nVibrant long-lasting colours\nFunctions as a SuDS paving system\nVersatile & Permeable\n",
          "https://dam-assets.apps.travisperkins.group/o504e0d/GPID_1100651482_IMG_00.jpg?width=450&height=300",
          "\u00a355.34 "
    ],
    [
          "4Trade Roller Sleeve Medium Pile Microfibre 9\u201d",
          "Manufactured from a high quality woven polyester pile, this lint-free roller aids absorption whilst the abraded tips ensure a consistent release of any water, acrylic or solvent-based product.Perfect for the application of water and solvent based varnishes, lacquers and gloss paints.\n",
          "https://dam-assets.apps.travisperkins.group/xgyjj5n/GPID_1000573344_IMG_00.jpg?width=450&height=300",
          "\u00a38.47 "
    ],
    [
          "Vintage Cup Handle Brass Effect",
          "Vintage Cup Handle Brass EffectVintage Cup Handle Brass Effect\n",
          "https://dam-assets.apps.travisperkins.group/xgyewl7/GPID_1100789150_IMG_00.jpg?width=450&height=300",
          "\u00a310.28 "
    ],
    [
          "Tobermore Tegula Colour Block Paving Bracken 208 x 173 x 60 mm",
          "Vintage themed Tegula is a popular and versatile block paving product that provides an antique appearance, evoking timeless style and elegance. Tegula comes in a wide selection of vibrant, long-lasting colours that benefit from our specialist approach to significantly reducing efflorescence compared to other products on the market.Processed to give an aged, antique appearance\nVibrant long-lasting colours\nSignificantly reduced efflorescence\nSuitable for both modern or period properties\n",
          "https://dam-assets.apps.travisperkins.group/xkgmkg0/GPID_1100743543_IMG_00.jpg?width=450&height=300",
          "\u00a33.52 "
    ],
    [
          "Sterling Triple Glazed Frameless Self Cleaning Skylight 600 x 2000mm",
          "This is a high-performance, non-opening frameless skylight. It is triple glazed with 6mm toughened, self-cleaning glass and a U Value of only 0.9 W/mGlazing Type: Triple Glazed\n20 Years Warranty\nInternal Glass Size (QUOTED): 600 x 2000 mm External Glass Size: 800 x 2200 mm\nTop Glass Pane: 6mm BS EN 12150 Thermally Toughened Glass\nSpacer Type: 15mm Black Warm Edge\nAir Gap: 15mm 90% Argon Filled\nMiddle Glass Pane: 4mm BS EN 12150 Thermally Toughened Glass\nSpacer Type: 15mm Black Warm Edge\nAir Gap: 15mm 90% Argon Filled\nBottom Glass Pane: 44.2 Low E; BS EN 14449 Laminated Glass\nSelf Cleaning: YES\nUV Protected: YES\nU Value: 0.9 W/m\n",
          "https://dam-assets.apps.travisperkins.group/o35g9yn/GPID_1100966354_IMG_00.jpg?width=450&height=300",
          "\u00a3646.99 "
    ],
    [
          "Solid Clear Oak External Door 4 Panel Glazed External Door Custom size",
          "44mm thick 4 Panel Solid Oak Glass Opening custom made External door. These are custom made to your specific size up to 2100 x 950mm. Please call for anything larger than this.The door is made is made by laminating 2 solid sections oak for the frames and then hydraulically press assembled\nIt is manufactured as separate stiles and rails each having twin 16mm dowels to each joint for maximum strength.\nThe door is supplied unglazed and is suitable for 18mm glass. Beading supplied is loose\nThis door is supplied fully factory finished in either a Clear, Light Oak, Medium Oak or Dark Oak. Please choose option when ordering\nMade in the UK\nThese doors are bespoke made to order and are none refundable\n",
          "https://dam-assets.apps.travisperkins.group/x210zjd/GPID_1100901131_IMG_01.jpg?width=450&height=300",
          "\u00a31,380.28 "
    ],
    [
          "4 x 4 Power Pub Shed",
          "4x4 Power Pub ShedThis Power pub shed has responsibily sourced, high grade slow-grown timber renowned for its strength and resistance to warping\nHeavy duty framing with corner bracing on all wall panels\n12mm thick shiplap tongue and groove, including the roof and floor\nHigh performance polyester backed waterproof felt\nRemovable pub shed windows to allow serving drinks in the sun, and protection from rain and snow in winter\n12mm thick shiplap tongue and groove, including the roof and floor\n",
          "https://dam-assets.apps.travisperkins.group/xgyw71k/GPID_1100989146_IMG_01.jpg?width=450&height=300",
          "\u00a3624.00 "
    ],
    [
          "Makita Dl x 2283TJ 18 Volt Lxt Brushless Twin Pack 2 x 5.0AH LI-ION Batteries, Charger and CASE.",
          "The Makita DLX2283TJ is an 18 Volt LXT Brushless Twin Pack containing the DHP485Z Combi Drill, DTD153Z Impact Driver with 2 x 5.0Ah Li-Ion batteries, charger and Makpac stacking case.45 minute charge time\nBrushless motors eliminate the need for Carbon brushes enabling motor to run cooler and more efficiently for longer life.\nBattery protection circuits protect against overloading, over heating and over discharging\nLED Job lights\nAll metal gears\nErgonomically designed grips for comfort\n",
          "https://dam-assets.apps.travisperkins.group/xlm2mqg/GPID_1100619110_IMG_00.jpg?width=450&height=300",
          "\u00a3626.36 "
    ],
    [
          "Door Profile Set Chamfered Oak 2100 mm x 69 mm x 20 mm",
          "Solid Oak Architave set, chamfer profile. Set includes 2 x 2.1m legs and 1 x 1.1m head. Profile size is 69mm x 20mmSolid Oak Architave set, chamfer profile.\nSet includes 2 x 2.1m legs and 1 x 1.1m head. Profile size is 69mm x 20mm\nSolid prime grade oak, mostly clear with the occasional knot\nGenerous 69 x 20mm section size for a quality feel\n",
          "https://dam-assets.apps.travisperkins.group/YNWdB/GPID_1100520678_IMG_00.jpg?width=450&height=300",
          "\u00a3110.81 "
    ],
    [
          "Peerless Waste Basket Strainer 3.5 Stainless Steel Without Overflow",
          "Stainless steel flange basket strainer with inner basket and no overflow, perfect for completing a fully functional kitchen sink to withstand the daily wear and tear.Strainer removes for ease of cleaning\nFor sinks without an overflow\nPush in to retain the water\nEasy to install\nFrom the Peerless Range\n",
          "https://dam-assets.apps.travisperkins.group/xw4mryl/GPID_1000232100_IMG_00.jpeg?width=450&height=300",
          "\u00a310.09 "
    ],
    [
          "Multipanel Neutrals Bathroom Wall Panel Hydrolock 2400 X 598mm Parchment 7858",
          "The Neutrals collection is designed to pair with bold decors from Multipanel's Linda Barker, Heritage and Classic collections. With an eggshell finish, reminisicent of paint, Parchment pairs perfectly with Salvaged Planked Elm from the Linda Barker collection.Completely waterproof with 30 year guarantee\nCarefully selected Neutrals collection designed to pair with feature decors from Classic, Heritage and Linda Barker collections\nQuick and easy to install with no need to use grout\nEasy to clean\nThe Multipanel Hydrolock join allows panels to be connected together with a virtual seamless join.\nFSC forest friendly certified, and made in Britain\n",
          "https://dam-assets.apps.travisperkins.group/5m60p/GPID_1100691094_IMG_01.jpg?width=450&height=300",
          "\u00a3127.34 "
    ],
    [
          "Cementone Rapid Set Cement 2.5kg",
          "Bostik Rapid Setting Cement is a versatile product that is ideal for a variety of interior and exterior installation, repair, and maintenance projects. It is particularly well-suited for the installation of sanitary fittings, drainage systems, and the upkeep of concrete floors, paths, and steps. Sets in 20 mins\nJust add water\nIdeal for emergency repairs, filling and patching\n",
          "https://dam-assets.apps.travisperkins.group/oj05jg9/GPID_1000267002_IMG_00.jpg?width=450&height=300",
          "\u00a36.96 "
    ],
    [
          "Eclipse Door Latch & Hinge Pack Polished Chrome",
          "A pair of 76mm hinges and 64mm latch for hanging a standard internal doorPremium Bolt Through CE Tubular Latch 76mm\nGrade 7 (40kg), BSEN 1935 Performance Tested 200,000 cylce\nCE 2812, UKCA 1121, BSEN 1634 Fire Rated FD 30, 60, 90, 120 minute\n",
          "https://dam-assets.apps.travisperkins.group/OXZOQ/GPID_1010004696_IMG_00.jpg?width=450&height=300",
          "\u00a38.26 "
    ],
    [
          "Knauf Insulation Timber Frame Party Wall Slab 60mm 11.52m2",
          "An A1 Non-Combustible Glass Mineral Wool slab, manufactured using Knauf Insulation's unique ECOSE\u00ae Technology, and is specifically designed for use as full fill insulation in timber frame separating (party) walls.Designed to fully fill the party wall cavity to prevent party wall thermal bypass, contributing towards a zero effective U-value\nSuitable for use with a range of constructions registered in the Robust Details Handbook reducing the need for on-site acoustic testing\nManufactured from mineral wool which provides higher levels of sound absorption and reduction than other mainstream insulants to reduce the sound transfer between dwellings\n",
          "https://dam-assets.apps.travisperkins.group/N36nA/GPID_1000082026_IMG_00.jpg?width=450&height=300",
          "\u00a3154.69 "
    ],
    [
          "Keraquick 20kg Grey Versatile Adhesive",
          "Keraquick is a versatile adhesive, which permit floor tiles to be grouted after 2 hours and put into service after 24 hours. Its flexibility allows its use on plywood substrates and with heated floors.High performance, rapid setting, flexible grey or white cement-based tile adhesive for use on walls and floors\nHigh bond strength\nIdeal for use with underfloor heating systems\nIdeal for conservatories or areas with large expanses of glazing\nExterior use on balconies and facades\nEasy to apply\n5m\u00b2 coverage for floors and 8m\u00b2 coverage for walls\n",
          "https://dam-assets.apps.travisperkins.group/xWyDB/GPID_1000170794_IMG_00.jpg?width=450&height=300",
          "\u00a329.69 "
    ],
    [
          "Anthracite Pipe Sleeve",
          "Anthracite Pipe SleevePerfect for hiding unsightly radiator pipe work\nMatch up with same colour valve for perfect final look\nHigh quality finish\nEasy to install\n",
          "https://dam-assets.apps.travisperkins.group/Q0RYZ/GPID_1100647791_IMG_00.jpg?width=450&height=300",
          "\u00a342.32 "
    ],
    [
          "47mm x 75mm X 2.4m C16 Kiln Dried Regularised Sawn Treated Timber",
          "Regularised (consistent dimensions) by planing all round with 'eased' (rounded) corners for comfortable handling. Our regularised carcassing finishes 2mm off nominal thickness and 5mm off nominal width.",
          "https://dam-assets.apps.travisperkins.group/v44q5wj/GPID_1000190437_IMG_00.jpeg?width=450&height=300",
          "\u00a37.69 "
    ],
    [
          "Crystal Single Door Full Glass Right Hand White Obscure 840 x 2090 x 70mm",
          "To ensure homes are secure all doors are fitted&nbsp;with state-of-the-art high security multi-point locking systems. PVC-U doors are thermally efficient, keep out draughts, will keep homes warm and heating bills down.High Security Multi-Point Locking System\nInternally Beaded for Added Security\nBackground trickle ventilation\nToughened Saftey Glass\nHandle, Lock and cill included\n",
          "https://dam-assets.apps.travisperkins.group/oe0y23q/GPID_1100906691_IMG_00.jpg?width=450&height=300",
          "\u00a3504.90 "
    ],
    [
          "Osmaweld 2Z161G 50mm Bend 87.5\u00b0 Grey",
          "ABS bend with two sockets that easily connects OsmaWeld pipe at 87.5\u00b0.Conforms to BS EN 1455-1:2000\nSuitable for use with intermittent discharges of water up to 90 degree celsius\nSolvent weld system\nSecure jointing method\nManufactured from high grade ABS\n",
          "https://dam-assets.apps.travisperkins.group/rYrDm/GPID_1000319080_IMG_00.jpeg?width=450&height=300",
          "\u00a33.35 "
    ],
    [
          "4Trade Classic Knob Chrome 38mm Pack of 2",
          "These chrome classic knob furniture handles are a great finishing touch for classic styles of furniture. They are a timeless accessory, and are ideal for a more traditional style of furniture design. The versatile round knob shape means these handles look great on both shaker style and slab style cabinet doors.Ideal for most types of cabinet\nFixings included\nThe 4Trade brand represents trade quality and value for money\n",
          "https://dam-assets.apps.travisperkins.group/xkg23l0/GPID_1000205520_IMG_00.jpg?width=450&height=300",
          "\u00a36.90 "
    ],
    [
          "Staifix Starter Tie 135mm Bag of 10",
          "Screw in Starter Ties are supplied with an 8mm nylon plug and is suitable for use in brickwork and blockwork of up to 3 storeys or 8 metres in height.Ideal for the construction of conservatories, extensions and garden walls\nSupplied in bags of 10. Also available singularly\nMeets the technical requirements of the NHBC\nCE Marked\n",
          "https://dam-assets.apps.travisperkins.group/3X3G2/GPID_1000334827_IMG_00.jpg?width=450&height=300",
          "\u00a327.79 "
    ],
    [
          "Natural Paving Carbon Black Calibrated 900 x 600mm",
          "Carbon Black from Natural Paving\u2019s Classicstone collection is a dark, black limestone paving. This riven hand cut stone is available in both project packs and single sizes and will add depth to any landscape, ideal for those who want an ultra modern look.Natural Limestone\nEthically Sourced\nCalibrated\nAs Carbon Black is a limestone, it may lighten over time\n900x600mm Flagstones\n",
          "https://dam-assets.apps.travisperkins.group/YNPPr/GPID_1100573661_IMG_00.psd?width=450&height=300",
          "\u00a32,013.26 "
    ],
    [
          "3000 mm x 100 mm x 100 mm Ecc Green Treated UC4 Fence Post",
          "Green heavy duty rough sawn timber fence posts available in a variety of sizes and lengths. The treated post has been incised for deeper preservative penetration giving it a 15 year anti-rot guarantee for use in ground contact. Ideal for all fencing projects.Ideal for supporting most types of timber fence panels\nPerfect for constructing a solid boundary fence using arris rails and featheredge boards\nSupplied pressure treated, which will enhance the style and help protect the timber from insect infestation, fungal decay and rot\n",
          "https://dam-assets.apps.travisperkins.group/xdm2myy/GPID_1100871059_IMG_00.png?width=450&height=300",
          "\u00a326.24 "
    ],
    [
          "Travis Perkins Gravel and Shingle Bulk Bag 10mm",
          "This bulk bag of 10mm gravel and shingle consists of small stones that are ideal for mixing with other products when concreting and floor screeding. Other uses include backfilling drains and landscaping tasks. It is recommended that the 20mm version or one of the decorative aggregates is used for driveways and paths as the small stones ca n be brought inside on footwear.Minimum packed weight of 800kg +/- 5%\nThis product will most likely be locally quarried meaning the colour may vary around the UK. This is a construction aggregate, not decorative. If you want a decorative gravel please call your nearest branch to get the colour and shape match you want.\n",
          "https://dam-assets.apps.travisperkins.group/xdmd9r3/GPID_1000134561_IMG_00.png?width=450&height=300",
          "\u00a382.76 "
    ],
    [
          "Super Lap Fence Panel Pressure Treated 6ft x 4ft (1.83m x 1.22m)",
          "This 4ft overlap fence panel is ideal for use in your garden to create privacy and security along boundaries. An alternative to traditional overlap panels that have 'waney-edged' boards, this version features straight-cut boards that give it cleaner, more contemporary lines. Its natural timber colour will blend attractively into any garden.\nIt is strengthened with the use of 5 vertical battens on each side. The 44mm frame adds additional strength and rigidity. \nThis panel further benefits from having been pressure treated, giving it a 15 year Anti-Rot guarantee.  The panels can also be used without gravel boards. Made in the UK.Pressure treated for durability and dip treated for resistance against rot\nLap fencing style ensures privacy\nRobust and long lasting 15 year Anti-Rot guarantee\nWeather resistant\nResistant to rusting\nNo annual retreatment needed\nClean lines, no waney edge boards for a neater appearance\nExtra vertical battens for added strength\n",
          "https://dam-assets.apps.travisperkins.group/ormpwpw/GPID_1000020593_IMG_00.jpg?width=450&height=300",
          "\u00a339.67 "
    ],
    [
          "Multipanel Classic Bathroom Wall Panel Hydrolock 2400 x 1200mm Frost White M049",
          "Multipanel are the leaders in bathroom wall panels. A real alternative to tiles. Just think about, no more cleaning and maintaining grout. Allowing your bathroom to look better for longer. The ever popular Frost White semi-gloss apearance, gives a bright, vibrant appearance.Completely waterproof\nEasy to install, much quicker than tiling and grouting\nEasy to clean, just wipe clean\n30 year guaranteed\nMade from laminate bonded to a waterproof plywood core\nVirtually seamless Hydrolock join\nVast range of colour options\nFSC Forest friendly certified\nMade in Britain\n",
          "https://dam-assets.apps.travisperkins.group/g40yk/GPID_1000237701_IMG_00.jpg?width=450&height=300",
          "\u00a3261.31 "
    ],
    [
          "Werner 57711020 Square Rung Double Extension Ladder 1.83m",
          "The 577 Series 1.83m double section extension ladder is constructed using high grade aluminium and extends to 2.95m. Box section stiles provide added rigidity and sturdiness to ensure maximum performance on the job site. Features include unique wrap-around top clips with smooth-glide runners to reduce wear and tear, slip-resistant square shaped rungs, and feet for added safety during use. Approved to the latest EN131 standard. For Professional Use.High performance robust box section stiles for durability\nIntegrated ladder level gauge for accurate positioning\nSlip-resistant square rungs for comfort and security\nUnique wrap-around top clips with smooth-glide runners to reduce wear and tear\nLocking catches secure sections together for safe use and easy transportation\n150kg load capacity**\nApproved to the latest EN131 Standard\nFor Professional Use\n",
          "https://dam-assets.apps.travisperkins.group/oyy18zl/GPID_1100871779_IMG_00.jpg?width=450&height=300",
          "\u00a399.00 "
    ],
    [
          "Ledged Door Hardware Set Pewter",
          "Hand forged ironmongery set including 2 x 18\" heavy duty strap hinges and 1 x heavy duty thumblatch in pewter finish penny end designHand forged pewter ironmongery set\nIncludes 2 x 18\" heavy duty strap hinges and 1 x heavy duty thumblatch in pewter finish penny end design\nDouble barrel hinges designed to cope with the weight of solid oak doors\nHeavy duty hand forged ironmongery in a penny end design\nSupplied in an antiqued and pewter finish\nKit is complete with all screws\n",
          "https://dam-assets.apps.travisperkins.group/3mbv2/GPID_1100520648_IMG_00.jpg?width=450&height=300",
          "\u00a378.91 "
    ],
    [
          "Classicstone Lakeland Brown Finestone Project Pack 18.9m2",
          "Lakeland sandstone is a bestseller from Natural Paving\u2019s Classicstone range, and it\u2019s not hard to see why. Also known as \u2018Raj Green Blend\u2019, Lakeland offers a cool colour palette of grey, brown and buff tones that will compliment any outdoor space.Natural Indian Sandstone\nCompliments any outdoor space, whether contemporary or traditional.\nEthically Sourced\nAvailable in single size, project packs and circle kits\n",
          "https://dam-assets.apps.travisperkins.group/om53r9e/GPID_1100487056_IMG_01.JPG?width=450&height=300",
          "\u00a3535.54 "
    ],
    [
          "16.7mm x 38mm Redwood Unsorted Planed Square Edge Finished Size 12mm x 32mm x 3m",
          "Manufactured from high quality Scandinavian unsorted grade Redwood (Pine). Sizes stated are nominal, finished sizes will be approx 5-6mm smaller.Manufactured In The UK\nPremium Grade Redwood Timber\nDue To The Machining Process, This Product's Finished Dimensions Will Be Smaller Than The Nominal Sizes Stated. Typically, 5 To 6mm Less On The Thickness And 5 To 8mm On Width (dependent On Original Section)\nEasy To Handle Lengths\n",
          "https://dam-assets.apps.travisperkins.group/v161n2g/GPID_1100666082_IMG_00.jpg?width=450&height=300",
          "\u00a34.58 "
    ],
    [
          "Cme Celmac Emerald Double Flap Seat White SEM11WH",
          "Universal fit, compatible with most modern and traditional pottery, heavy weight Thermoplastic seat and cover, conforms BS1254 TYPE 2, Made in the UKIdeal for commercial and contract applications, high traffic areas\nAdjustable colour matched plastic hinges\nColour Matched plastic hinge\nBlack Option Available\nDurable Material\nPacked in Single carton\nSeat & Cover\nMade in the UK\nAdjustable length from 430mm to 460mm\n",
          "https://dam-assets.apps.travisperkins.group/o0njr15/GPID_1000365689_IMG_00.jpeg?width=450&height=300",
          "\u00a337.80 "
    ],
    [
          "TRAVIS PERKINS OAK SHAKER PATT 10 DOOR 1981 X 686 X 35MM",
          "Oak veneer doors featuring a minimalist Shaker design that looks great in both traditional and contemporary style homes. Supplied ready to paint, stain or varnish.This minimalist Shaker design will look great in traditional and contemporary style homes\nConstructed from mixed materials including timber, real wood veneers and man-made materials\nEngineered composite core construction for greater resistance to warping, twisting and splitting than traditional timber doors\nProduct supplied unfinished, suitable finishing products include, Ronseal Trade Polyurethane Varnish and Osmo door oil\nThe door may be trimmed by up to 20mm in height and 20mm in width. Any reductions must be removed equally from each edge\n3 x 76mm or 100mm butt hinges should be fitted to this door. Door furniture is sold separately\nThis is a natural timber product and variances in texture, colour and grain may be apparent\n",
          "https://dam-assets.apps.travisperkins.group/ymYLA/GPID_1000474829_IMG_00.jpeg?width=450&height=300",
          "\u00a3101.99 "
    ],
    [
          "Como Knob Za Brushed Copper 25mm - 106.66.286",
          "Como Knob ZA Bru Copper D41x25mmSimple, yet elegant design\nOn trend finish\nModern Design\nCircular shape means it adapts elegantly to all furniture\n",
          "https://dam-assets.apps.travisperkins.group/xw42g75/GPID_1100933213_IMG_00.jpg?width=450&height=300",
          "\u00a38.57 "
    ],
    [
          "Frelan Hardware Jedo Sherbourne Bathroom Lever Handle Set Satin Nickel",
          "The Satin Nickel Sherbourne Bathroom Lever Handle Set is a smart choice for your bathroom doors. Designed with Zinc, it promises both long-lasting style and functionality.Zinc\nDomestic use only\n",
          "https://dam-assets.apps.travisperkins.group/G26r6/GPID_1100679848_IMG_00.jpg?width=450&height=300",
          "\u00a313.49 "
    ],
    [
          "Cementone Rapid Set Cement 5kg",
          "A mix in the bucket rapid setting cement mixSets in 20 mins\nJust add water\nIdeal for emergency repairs, filling and patching\n",
          "https://dam-assets.apps.travisperkins.group/laYyw/GPID_1000267003_IMG_00.jpg?width=450&height=300",
          "\u00a311.40 "
    ],
    [
          "Makita RT0700CX2/2 Tilt & Plunge 1/4\" Router/Trimmer 240V",
          "The Makita RT0700CX2/2 is a 240 volt variable speed router/trimmer with 1/4\" collet and 710 watt motor. Comes supplied with a trimmer base, tilt base and plunge base assembly.Makita 240V 1/4\" Router/Trimmer with Tilt and Plunge Base RT0700CX2/2\nThe Makita RT0700CX2/2 is a 240 volt variable speed router/trimmer with 1/4\" collet and 710 watt motor. Comes supplied with a trimmer base, tilt base and plunge base assembly.\n",
          "https://dam-assets.apps.travisperkins.group/78qQA/GPID_1000758367_IMG_00.jpg?width=450&height=300",
          "\u00a3234.84 "
    ],
    [
          "4TRADE M6 x 14 Washers Qty 10",
          "Heavy duty steel, general purpose washersGauge: M6\nFORM C\nBright Zinc Plated\nAvailable in a range of sizes\n",
          "https://dam-assets.apps.travisperkins.group/3ew0n/GPID_1100413510_IMG_00.jpg?width=450&height=300",
          "\u00a34.84 "
    ],
    [
          "Jackson Grain Square Edge Laminate Breakfast Bar 3000 x 900 x 38mm",
          "Our worktops come in a wide variety of materials, styles, colours, thicknesses and finishes. Our range includes the very latest materials and designs to reflect up-to-the-minute fashions that will bring a truly iconic look to your kitchen. Whatever your budget, there\u2019s lots of opportunity to customise your kitchen design with your choice of work surface.Water resistant\nDurable\nDemountable\nEasy to clean and maintain\n",
          "https://dam-assets.apps.travisperkins.group/XDyR6/GPID_1000752379_IMG_00.jpg?width=450&height=300",
          "\u00a3377.15 "
    ],
    [
          "4Trade Tee Hinge Light Zinc Plated 300mm Pack of 2",
          "Ideal for use on domestic gates and shed doors.Minimal installation required\nSturdy and hardwearing\nZinc plated\nSurface mounting\nFor exterior doors and gates\n",
          "https://dam-assets.apps.travisperkins.group/lzzya/GPID_1000277709_IMG_00.jpeg?width=450&height=300",
          "\u00a32.38 "
    ],
    [
          "Mcalpine 90 Degree Flexible Tail WC Connector WC-CON8F",
          "97-107mm Inlet x 4in/110mm Outlet 90 degree Flexible WC Connector (Long Length).Conforms to DIN 1389:2000-05\nLGA certified\nTested to BS 5627:1984\nNo build-up of sediment\nFinned seal spigot for internal connection to cast iron, plastic or clay\n1 1/4in universal vent boss\nSupplied with banking cap\nLength closed is 220mm\nLength open is 400mm\nDurable\n",
          "https://dam-assets.apps.travisperkins.group/oz8dzm0/GPID_1000016405_IMG_00.jpg?width=450&height=300",
          "\u00a329.87 "
    ],
    [
          "SAM04 Square Edge Primed MDF 18 x 69 x 4200mm",
          "The range of contemporary profiles from SAM creates a clean aesthetic with edgy design.  Choose between a sharp square edge or chamfered profile or a softer round edge or add some depth with one of the grooved designs.MDF mouldings are easy to cut and install.\nLittle wastage - no defects or knots.\nSmooth surface provides a great paint finish.\nProvides consistent quality with every length.\nIt is available in long lengths.\nThere are a wide range of profiles available.\nMDF is a low maintenance product.\nStable yet flexible, so perfect for uneven walls.\n",
          "https://dam-assets.apps.travisperkins.group/v96png3/GPID_1100782005_IMG_00.png?width=450&height=300",
          "\u00a318.68 "
    ],
    [
          "4Trade Oxford Complete Latch Door Pack of Satin Anodised Aluminium",
          "Premium quality door handles manufactured to the highest standard.4Trade SAA Oxford Complete Latch Door Pack SAA\nMinimal installation required\nHardwearing and easy to maintain\n",
          "https://dam-assets.apps.travisperkins.group/o0n26j6/GPID_1000088617_IMG_00.jpeg?width=450&height=300",
          "\u00a314.52 "
    ],
    [
          "XL VICTORIAN OAK 4 PANEL NON RAISED MOULDINGS FD30 DOOR 1981 X 762 X 44MM",
          "Our Cobham oak veneer doors feature a timeless yet classic design that will look great in both modern and traditional homes. Each door is supplied ready to paint, stain or varnish. They are rated to a minimum resistance of 30 minutes and British Standard BS 476.Mixed material construction using timber, real wood veneers and man-made materials\nEngineered solid composite core construction for greater resistance to warping, twisting and splitting than traditional timber doors\nFire resistant\nDoor requires finishing using a suitable Ronseal paint, stain or varnish found in your local branch - these doors are not suitable for treatment/finishing with any kind of oil, wax or polish which will cause the oak veneer to delaminate\nRated to a minimum fire resistance of 30 minutes, and meet the requirements of BS 476. Our self-adhesive intumescent strips need to be attached onto the door or frame. Sold separately\nAlways ensure doors are installed in line with the 'Field of Application' as detailed on the certificate / test report\nSelf-adhesive intumescent strips need to be attached to the door or frame - sold separately\nDoor furniture is sold separately\n",
          "https://dam-assets.apps.travisperkins.group/wbpdB/GPID_1000488627_IMG_00.jpeg?width=450&height=300",
          "\u00a3250.80 "
    ],
    [
          "Easy Trim Prem Mult Cavity Closer 50/100 2.4m",
          "Easy-trim Cavity Closer Provides A Simple And Highly Effective Method For Closing Cavities Around Openings In Masonry Cavity, Timber Frame And Steel Frame System Wall Constructions.  Suitable For Use In Both New Build And Refurbishment. An Easy Way To Achieve Building Regulations Compliance When Closing Cavities Where Cavity Widths Are Unknown. Available In 2 Profiles To Fit Cavity Widths Between 50-150mm.Easy To Install With A Simple Cut To Size Indicators\nFully Ridged Plastic Cavity Closure\nPrevents Cold Bridging\nSuitable For Use In Both New Build And Refurbishment\nReduces Risk Of Condensation, Mould And Moisture Migration Across The Cavity\nCan Be Used On Timber Frame Constructions\nOvercomes Cavity Width Variations\nComplies With Relevant Building Regulations And British Standards\n",
          "https://dam-assets.apps.travisperkins.group/o0ng6nw/GPID_1100523687_IMG_00.jpg?width=450&height=300",
          "\u00a315.22 "
    ],
    [
          "Compact Pent Log Store Home Delivery",
          "Compact Pent Log Store Home DeliveryThe Compact Log Store from Forest is ideal for keeping a convenient number of logs to hand. \n\nIts small footprint makes this woodstore ideal for by the backdoor while its 0.5m3 capacity provides ample space for a day or two worth of logs.\n\nThe overlap boarded roof will direct rain away from drying logs. To deter damp and encourage airflow, the back, sides and floor of the wooden log store are all slatted. Pressure treated bearers keep the storage unit and the logs raised off the damp ground.\n\nThe small log store has been pressure treated for longevity and is supported by a 15-year anti-rot guarantee. Fixings and instructions are included for a simple self-assembly\nLog Capacity: 0.5m3\nPressure treated to ensure longevity\n15-year anti-rot guarantee\nCan fit 2 rows of average-sized logs\nSmall footprint ideal for patios and by backdoors\nPent roof allows for water run off and protection for drying logs\nSlatted back, sides, and floor for air circulation and to protect logs from damp\nManufactured from FSC\u00ae certified timber\nDelivered flat packed for easy self-assembly\n",
          "https://dam-assets.apps.travisperkins.group/oq4lk5k/GPID_1100928829_IMG_00.jpg?width=450&height=300",
          "\u00a3118.98 "
    ],
    [
          "Drayton MA1/679-3 3 Port Valve Mid Position 22mm",
          "The new Drayton 3 port, diverter and mid-position valves are available in 22mm and 28mm. All models feature new \"snap-on\" actuators and have industry-standard wiring and dimensions1.5 Year Guarantee\n230V actuator with 1m 5-core cable and 3(1)A switch rating\nComplete with compression fittings for 22 mm copper pipe\nManual lever and valve position indicator\nSpring return with 100% tight shut off\nOpens in 14 seconds\n5-wire installation\nReplaceable actuators and motors\n5-93\u00b0C Flow Temperature\nOff: 6 Seconds Under Spring Return\n",
          "https://dam-assets.apps.travisperkins.group/P8J59/GPID_1000152574_IMG_00.jpeg?width=450&height=300",
          "\u00a3101.02 "
    ],
    [
          "Hanworth Vertical 6 Sections White 1846mm x 508mm",
          "The Hanworth Radiator combines low water content with high thermal efficiency and is supplied with 4 Wall Brackets and 1 Manual Air vent. These radiators are lightweight and slim line, suitable for all rooms, and provide a modern take on the traditional radiator.High output, 100% \u2018Green\u2019, frameless aluminium radiator that uses infrared technology to produce a healthier energy-efficient heat. This and the easy clean, low surface temperature makes the Eyebeam ideal for use in medical environments. Its slim line design features an innovative touch screen control (Elec version), with programmable 7 day timer and built in thermostatic sensors. Their isolation class 2 and IP construction makes them water-resistant so they are perfect for wet rooms and bathrooms.\n",
          "https://dam-assets.apps.travisperkins.group/vLvwL/GPID_1100384033_IMG_00.jpg?width=450&height=300",
          "\u00a3874.30 "
    ],
    [
          "Flatpack Base Unit Ultra Matt Dust Grey Slab 1000mm - FKKF0808",
          "Kitchen Kit is the easy new choice for trade kitchens. For over 30 years they been manufacturing the highest quality kitchens right here in the UKDelivery Information - 3 days for mainland UK, up to 12 days for NI, Highlands and Islands\n18mm Cut & Edge Contemporary Slab Door with Durable Foil and ABS Edging. FIRA Gold certification\nQuick Build Flatpack 18mm Cabinet with 8mm Back. FIRA Level H Certification\nAdjustable Legs with 49mm service void at the rear\nAdjustable Shelf\nDoors Can be hinged on left or right side using soft close hinges\n",
          "https://dam-assets.apps.travisperkins.group/o35myp0/GPID_1100894111_IMG_00.jpg?width=450&height=300",
          "\u00a3187.19 "
    ],
    [
          "38mm x 63mm x 2.4m Ecc CLS Profile Timber",
          "High quality treated sawn timber for general construction usesIdeal for studwork and framing\nKiln Dried / Regularised (consistent dimensions) / Machine Graded / CE - UKCA marked / Planed All Round (eased edge corners) / Certified Timber\nAll ECC construction timber is stress graded according to European standard for structural timber EN14081 to C16 strength class\n",
          "https://dam-assets.apps.travisperkins.group/xp8grqq/GPID_1100871238_IMG_00.jpg?width=450&height=300",
          "\u00a33.58 "
    ],
    [
          "Totectors Denton At Mid Black Boots Size 11",
          "Medial Arch support,External heel cradle for extra support,Durable and breathable leather upper,Highly breathable mesh lining for maximum comfort,Lightweight aluminium toecap (200J) and composite anti-penetration plate for flexibility,Padded collar and tongue for comfort,Scanner safe, non-metallic composite hardware,PU removeable insole for underfoot cushioning &amp; comfort,SRC slip and oil resistant rubber outsole for grip and durability,S1P SRC HRO Certified Mid bootTotectors exclusive SRC slip and oil resistant rubber outsole for durability and optimal grip\nShock absorbing EVA inserts for extra comfort\nMedial arch support for wearer\nPU removeable insole for underfoot comfort\nDurable and breathable leather upper\n200J aluminium lightweight toe cap & Anti - prenetraion plate for flexibilty\n",
          "https://dam-assets.apps.travisperkins.group/v449g5e/GPID_1100900826_IMG_00.jpg?width=450&height=300",
          "\u00a392.79 "
    ],
    [
          "Makita 18V Brushless Slide Compound Mitre Saw Body Only DLS714Z",
          "Tough and versatile enough for site use, the Makita DLS713Z 18v Lithium-ion cordless 190mm slide compound mitre saw is a cut above the rest.Powered by two 18V Li-ion batteries in series to supply energy to the powerful 36V DC motor drive system.\nDouble Sliding Mechanism\nSoft start\nEasy to Grip handle with anti-slip elastomer surface\nEquipped with Battery protection circuit: designed to protect the battery from damages due to over-discharge, high temperature or overload current\nCuts up to 300mm in a singe pass\n",
          "https://dam-assets.apps.travisperkins.group/7nW6Q/GPID_1100379925_IMG_00.jpg?width=450&height=300",
          "\u00a3597.06 "
    ],
    [
          "British Gypsum Gyproc WallBoard Square Edge 1800mm x 900mm x 12.5mm",
          "A gypsum based board ideal for internal use for walls and ceilings. Easy to cut, shape and fix, it can be plastered ordirectly  decorated, Not suitable for moist or wet conditions. This product comes in a square edge finish. When fixing this plasterboard sheet use drywall screws.Reduces noise\nResists fire to allow more time for evacuation\nUse in multiple layers for added performance\nProvides a smooth surface ready for finishing\nFully recyclable\nQuick and easy to install in British Gypsum systems\n",
          "https://dam-assets.apps.travisperkins.group/14qQ2/GPID_1000388410_IMG_00.jpg?width=450&height=300",
          "\u00a39.98 "
    ],
    [
          "Extenal Fully Finished Pattern 10 Oak Veneer French Doors 1790 x 54mm",
          "Robust French patio doors designed and constructed for long-lasting efficiency and good looks.Engineered hardwood doors, 54mm thick with the slimmest of sightlines without compromising stability.\nContemporary looking French doors with a modern chamfered profile, fully factory finished to a high standard.\nSupplied with 24mm double glazed units of Low E coated, toughened tempered safety glass, offering a thermally efficient solution\nUses the very latest concealed hinges meaning they are not visible from the inside or outside, along with a Vectis multi-point lock and additional finger bolts, this French patio door has a total of 5 locking points.\n10 Year manufacturing guarantee for peace of mind, full details available in the home owner's manual.\nDoor set includes doors, frames, hardware, seals, fixings and full installation instructions.\nRequired opening is a total of 10mm bigger than outer frame dimensions shown in both height and width.\n",
          "https://dam-assets.apps.travisperkins.group/MYjmV/GPID_1100676154_IMG_00.png?width=450&height=300",
          "\u00a32,804.28 "
    ],
    [
          "Mira Decor 9.5Kw White Single Outlet Shower 1.1894.008",
          "Make your shower the perfect focal point in your modern bathroom with the new Mira Decor electric shower. Available in three contemporary colour options with four spray experiences. Get more with Mira Decor.Separate power and temperature controls\nPush button on/off\nLow power setting saves water and energy\nClearscaleTM reduces limescale by up to 50%\nThanks to the smooth flat surface the shower unit is easy clean, whilst the handset features rub clean nozzles.\nModern aesthetics with a range of colours and chrome detailing\nEasy to use Diverter allows for relaxing overhead shower or invigorating handshower with 4 spray modes\nEasy clean showerheads both with rub clean nozzles\nEasy clean smooth hose\n",
          "https://dam-assets.apps.travisperkins.group/oz8pwny/GPID_1100989628_IMG_00.jpg?width=450&height=300",
          "\u00a3262.50 "
    ],
    [
          "Bsw Brown Treated UC4 Incised Fence Post 75 x 75mm x 1.8m",
          "High pressure brown treated fence post which has been incised to ensure a deeper penetration of preservative, meaning that this post comes with a 15 year warranty.Enhanced treatment to user class 4 results in a 15 year warranty bringing peace of mind\nAll cut ends should be end sealed with a proprietary treatment\nThe timber is sourced from sustainable forests\nMade in the UK, supporting British industry\n",
          "https://dam-assets.apps.travisperkins.group/xkg2g26/GPID_1100866382_IMG_00.jpg?width=450&height=300",
          "\u00a38.56 "
    ],
    [
          "Liff 15mm Push Fit Lime Fighter 2 Compact Magnetic Scale Inhib Lfp2-15",
          "The Limefighter Compact range are a professional quality magnetic scale inhibitor, designed for easy installation into new or existing installations.All metal construction for durability\nPushFit model\nEnvironmentally friendly (no chemicals)\nCompact design for easier installation\nHigh quality chrome finish, ideal for visible installations\nSuitable for cold and hot water\nReduces fuel bills\nImproved system efficiency\nCan be installed on horizontal or vertical pipework\nWRAS Approved\n",
          "https://dam-assets.apps.travisperkins.group/rYJw5/GPID_1000679042_IMG_00.jpg?width=450&height=300",
          "\u00a352.04 "
    ],
    [
          "Wavin Osma Waste solvent weld plain ended pipe 40mm black 3m",
          "Wavin Osma PVC-C solvent weld waste is suitable for both interior and exterior use and is designed to withstand higher in-service temperatures. It has UV and heat resistance as well as fire retardant properties.3m plain ended pipe length\nFire retardant properties\nDesigned to withstand higher temperatures\nUV resistant - suitable for exterior and interior installation\nRange available in black, white and olive\nKitemarked to BS EN 1566-1:2000\n",
          "https://dam-assets.apps.travisperkins.group/7Wjj2/GPID_1000245560_IMG_00.jpeg?width=450&height=300",
          "\u00a311.74 "
    ],
    [
          "Ronseal PU Varnish, Matt - 750ml",
          "For wood that gets a hard time, Ronseal Ultra Tough Varnish has a traditional polyurethane formula that brings out the natural beauty of your wood.Clear Finish\nRecoat in 6 hours\nSolvent based\nFor interior wood\n",
          "https://dam-assets.apps.travisperkins.group/Vo4B2/GPID_1000390521_IMG_00.jpg?width=450&height=300",
          "\u00a318.85 "
    ],
    [
          "Festool 204200 Replacement Main Filter for Post 2019 CT15 & Ct Mini",
          "Replacement main filter for the CT 15, and the CT Mini &amp; Midi (manufactured from 2019 onwards). Filters residual dust not retained by the filter bag so that clean air is directed back into the room.Quick and clean filter replacement: Easy replacement of filter cartridge from outside without opening the mobile dust extractor\nMain filter surrounded by practical plastic frame\nFilters residual dust not retained by the filter bag so that clean air is directed back into the room\n1 in pack\n",
          "https://dam-assets.apps.travisperkins.group/OmDPA/GPID_1100673047_IMG_00.jpeg?width=450&height=300",
          "\u00a321.76 "
    ],
    [
          "Ibstock Brick Glenfield Antique 65mm Facing Brick - Pack Of 500",
          "This Plain Red Stock Brick Is Exclusive To Travis Perkins, Made At The New Leicester Eclipse Factory. A Red Antique Stock Facing Brick; Fully Durable With Low Soluble Salts. This Is A Moderate Strength Facing Brick With High Water Absorption, Ideal For Most Masonry Applications And Easy To Lay.Durable - Can Be Used In Most Masonry Situations\n",
          "https://dam-assets.apps.travisperkins.group/x7lqy9d/GPID_1100562057_IMG_00.jpg?width=450&height=300",
          "\u00a3894.00 "
    ],
    [
          "Sunrise Suffolk Oak Veneer Door 1981 x 762 x 35mm",
          "Suffolk Oak internal door with grooved centre panel, supplied ready to finish.Engineered construction for greater resistance to warping, twisting and splitting than traditional timber doors\nProduct supplied unfinished, suitable finishing products include, Ronseal Trade Polyurethane Varnish and Osmo door oil\nExtra thick lipping allows you to trim up to 20mm in width and 20mm in height from the door\nProduct supplied unfinished, suitable finishing products include, Ronseal Trade Polyurethane Varnish and Osmo door oil.\nRequires 3 hinges for hanging\n",
          "https://dam-assets.apps.travisperkins.group/xlm9qnd/GPID_1100788341_IMG_00.JPG?width=450&height=300",
          "\u00a3106.96 "
    ],
    [
          "Head Chamfered DH3 Bath 2305 Rh Piece",
          "Head Chamfered DH3 Bath 2305 Rh PieceDecorative head components\nManufactured from high grade aggregate\nMade from a water repellent mixture\n",
          "https://dam-assets.apps.travisperkins.group/oyyw58j/GPID_1100977125_IMG_00.png?width=450&height=300",
          "\u00a3107.86 "
    ],
    [
          "Tobermore Textured Concrete Paving Slabs in Buff 450x450x35mm Pack of 30",
          "Textured paving slabs have a unique granular surface which gives a natural aged appearance. Textured slabs are available in a range of soft subtle colours making these paving slabs both stylish and hard wearing. Create a spectacular effect by pairing them with bands of Tegula Setts.PrimeTop: Manufactured with Tobermore's superb hard-wearing surface layer\nSuper stylish hard-wearing textured finish\nVibrant long-lasting colours\nNatural aged appearance\nEf-stop: vapour-cured for 12 hours to virtually eliminate efflorescence\nCompliment with bands of Tegula Setts to create a beautiful feature for your driveway or patio\nExtremely low slip/skid risk\n25 year guarantee on the structural integrity of all Tobermore block paving products\n",
          "https://dam-assets.apps.travisperkins.group/ne8YV/GPID_1000758059_IMG_00.jpg?width=450&height=300",
          "\u00a3301.68 "
    ],
    [
          "Forest Garden Caledonian Square Raised Bed 90 x 90",
          "The Square Caledonian Raised Bed from Forest is perfect for growing a variety of plant life and the compact design makes it perfect for smaller gardens. A raised planter bed is great to use as a kitchen garden, to grow herbs and vegetables to use in your cooking. To manufacture these planters we have used timber that has been Pressure Treated to give it a 15 year guarantee against rot and fungal decay. The Square Planter can hold approximately 270L of compost to give room for a variety of plants, flowers, vegetables or herbs. These planters are easy to assembly as the frames are pre-notched and delivered with fixings and step-by-step instructions. Other sizes and styles are also available in the Caledonian range.The Forest Caledonian Square Raised Bed is perfect for use as a kitchen garden or a floral display\nManufactured from Pressure Treated timber for a superior build\nThis product is part of our Accessible Gardening range designed in partnership with Thrive, the UK\u2019s leading charity that helps people transform their lives through gardening\nHolds approx. 270L of compost\nHigh quality build and finish\n",
          "https://dam-assets.apps.travisperkins.group/l3v9r/GPID_1100527858_IMG_00.jpg?width=450&height=300",
          "\u00a3215.00 "
    ],
    [
          "Abode AW3145 Dune 1.5 Bowl Inset Granite Sink Metallic Grey",
          "The Dune family of granite sinks offer a more natural design style thanks to its soft organic form. Showcasing perfectly rounded corners, sumptuous bowl styling and a fashionable yet extremely practical drainer area results in this stunning design that would blend easily into any kitchen d\u00e9cor.Durable matt finish granite composite construction throughout\nSoftened square edges for a sharp but easy clean look\nLuxury Orbit waste supplied as standard\nPipework included\n",
          "https://dam-assets.apps.travisperkins.group/x7ljlpn/GPID_1100856209_IMG_00.jpg?width=450&height=300",
          "\u00a3471.43 "
    ],
    [
          "Elka Driftwood Oak Laminate Flooring 1261 x 192 x 8mm Pack Size 2.179m2",
          "Elka 8mm Laminate Driftwood Oak.Uniclic locking system\n20 years domestic warranty\nSuitable for Underfloor heating\nNatural & Authentic look\n",
          "https://dam-assets.apps.travisperkins.group/7yqj6/GPID_1100614628_IMG_00.jpg?width=450&height=300",
          "\u00a335.76 "
    ],
    [
          "Floodsax Commercial Self Inflating Flood Defence System 5PK",
          "This innovative self-inflating flood defence system can be stored in a box and can be deployed in minutes to protect businesses or homes from flood water. The FloodSax consists of a semi-porous inner liner, which contains hundreds of absorbent crystals which absorb water to 90% capacity within 3 minutes during deployment, acting like sandbags to keep floods at bay.FloodSax when deployed are designed so they mould into doorways to keep flood waters out\nFloodSax can be placed down the toilet to contain overflow and dirty water\nFloodSax absorb water to 90% capacity in just 3 minutes\nFloodSax are lightweight at just 0.2kg when dry\nFloodSax expand evenly and can be expanded in water in the bath, a sink, a bucket or even the flood water prior to deployment\nFloodSax are easy to store, an alternative to sandbags and will last for up to 5 years in storage\nFloodSax are clean and self contained so are ideal for leaks and spills indoors as well as outside\nFloodSax are 96% biodegradable by weight\nFloodSax Are now bio based packaging.\n",
          "https://dam-assets.apps.travisperkins.group/10j5d/GPID_1000328798_IMG_00.jpg?width=450&height=300",
          "\u00a365.65 "
    ],
    [
          "Rock Fall Bantam Mid-Cut Safety Boot Size 5",
          "The RF115 Bantam is a breathtakingly lightweight and highly appealing groundbreaking mid cut safety boot that has been designed to be sustainable to its core. It features recycled plastic bottle upper textiles, lining and lace materials providing outstanding comfort along with breathability and water repellent properties, water often runs off!\r\n\r\nIt has a 100% non metallic construction, including a fibreglass toecap and composite midsole.\r\n\r\nThe outsole complex is a dual density EVA nitrile rubber outsole which gives abrasion resistance whilst providing exceptional shock absorption and weight reduction.100% Non-Metallic Construction\nAnti-Static\nOil Resistant\nSRC Slip Rated\nProtective Toecap & Midsole\nVegan Friendly\nSustainable\nWater Repellent Upper\n",
          "https://dam-assets.apps.travisperkins.group/x210edy/GPID_1100911475_IMG_00.jpg?width=450&height=300",
          "\u00a352.69 "
    ],
    [
          "K Rend Silicone ft Polar White",
          "Water repellent, self coloured render, hand applied to provide a scraped texture finish.For use both as a one coat render or as part of a two coat system\nHand applied\nOne coat directly on to block work\nTwo coat in conjunction with a K Rend Base Coat\nExcellent handling properties\nIncorporates silicone technology\nHigh water resistance\nAllows the substrate to breathe\nAvailable in a wide variety of colours\n",
          "https://dam-assets.apps.travisperkins.group/oj0j763/GPID_1000268793_IMG_00.png?width=450&height=300",
          "\u00a326.59 "
    ],
    [
          "Multipanel Classic Bathroom Wall Panel Unlipped 2400 x 1200mm Riven Slate 2859",
          "Multipanel have spend over 15 years perfecting their waterproof bathroom wall panels and are the best sellers in the UK, producting over 8,000 panels each week. Riven Slate is extremely popular as with its textured finish it dramatically replicated slate, at a fraction of the cost and weight of the real stone. Looking great with black corner and end extrusions, it creates a great statement within a shower or feature wall in a bathroom.Completely waterproof with 30 year guarantee\nDramatic dark colour and texture like real slate\nQuick and easy to install with no need to use grout\nEasy to clean\nSeamless joints between panels with Hydro-Lock\nHygienic\nVast range of colour options\nFSC Forest friendly certified\nMade in Britain\n",
          "https://dam-assets.apps.travisperkins.group/qz1jk/GPID_1000307682_IMG_01.jpg?width=450&height=300",
          "\u00a3413.88 "
    ],
    [
          "Bristan R 1/2 LEV Basin Tap Reviver With Lever Handles Chrome",
          "A perfect solution for reviving almost any out of date or faulty tap, quickly and easily, without disturbing existing plumbing connections.Suitable for use with most 1/2\" 5412 and 1/2\" 1010 taps\nIncludes a pair of handles and standard valves\nPack also includes various spacers and washers for use in different configurations to meet various tap seating depths\nSuitable for pressures between 0.2bar and 5.0bar\n",
          "https://dam-assets.apps.travisperkins.group/orm8n6w/GPID_1000045656_IMG_00.jpg?width=450&height=300",
          "\u00a366.28 "
    ],
    [
          "VELUX Top Hung Roof Window 780mm x 1180mm White Polyurethane GPU MK06 0062",
          "VELUX top-hung roof window with a White Polyurethane internal finish over a solid thermally treated pine core. The high quality low maintenance white finish is ideal for modern interiors. Top hung roof windows open to 45 degrees and are ideal for loft conversions where an uninterrupted view is preferred. Triple glazed providing enhanced noise reduction.Grey aluminium exterior cover\nWhite polyurethane surrounding a solid pine core\nVentilation flap\nClick- on covers for easy installation\nScrews and wall plugs are included\nSuitable for emergency escape\nTriple glazed\nNoise reduction\n",
          "https://dam-assets.apps.travisperkins.group/DEo3w/GPID_1000761466_IMG_00.jpg?width=450&height=300",
          "\u00a31,140.64 "
    ],
    [
          "Tyvek\u00ae Acrylic Single-Sided Tape 75mm x 25m",
          "Tape is a single-sided acrylic tape that is particularly suitable for damage repairs or making good as well as seals around pipes, windows or overlaps.Seals around penetrations, pipes, windows and on overlaps\nTyvek Acrylic Tape is made of Tyvek HDPE and acrylic adhesive for strong, bonds. It is recommended for use with most Tyvek breather membranes and AirGuard air and vapour control layers (AVCLs).\nIt helps to create a continuous building envelope system which keeps water and air out.\nEnvironmental Product Declaration available for download: https://www.dupont.co.uk/content/dam/dupont/amer/us/en/performance-building-solutions/public/documents/en/EPD-DuPont-Tyvek-Tape-2060B.pdf\n25-year limited warranty\n",
          "https://dam-assets.apps.travisperkins.group/nqGYy/GPID_1000571576_IMG_00.jpg?width=450&height=300",
          "\u00a332.71 "
    ],
    [
          "4FireDoors Vogue Lever Handle On Euro Profile Back Plate Satin Nickel",
          "A Satin Nickel lever on a chamfered edge rectangular Euro lock backplate. Euro profile 47.5mm c/c. A slender straight lever with smooth rounded edges forming an decreasing elliptical profile, a minimalist design.Suitable for commercial  environments\nSuitable for domestic environments\nFire rated\n10 year mechanical guarantee\n",
          "https://dam-assets.apps.travisperkins.group/0kyJQ/GPID_1100677742_IMG_00.jpg?width=450&height=300",
          "\u00a319.50 "
    ],
    [
          "Quick-Step Impressive Soft Oak Light Laminate Flooring 1380mm x 190mm x 8mm Pack Size 1.835m2",
          "Quick-Step Impressive is a collection of laminate floors that looks and feels exceptionally natural. The planks\u00e2\u20ac\u2122 authentic woodgrains, for example, are perfectly reflected into the floor\u00e2\u20ac\u2122s joints as well. And there\u00e2\u20ac\u2122s more: thanks to a unique water-repellent \u00e2\u20ac\u02dcHydroSeal\u00e2\u20ac\u2122 coating, Impressive laminate is not only beautiful, it\u00e2\u20ac\u2122s also the most waterproof laminate flooring ever produced.4 sided bevel\nDurable\nWaterproof\nUniclic locking mechanism\nEasy to install\nBedroom - Hallway - Kitchen - Living Room - Study\n",
          "https://dam-assets.apps.travisperkins.group/KOQvJ/GPID_1000793308_IMG_00.jpg?width=450&height=300",
          "\u00a352.27 "
    ],
    [
          "Green Plastic Coated Chainlink Fence 900mm x 50mm x 2.5mm x 10m",
          "Practical PVC-coated wire chain linked fencing. Supplied with straining wire for effective installation.High quality green PVC coated chain link fencing\nA well proven popular, versatile and easy to erect fencing suitable for garden or commercial use\nA professional product that is easy to use and can be installed efficiently and rapidly\nIncludes Line Wire\n",
          "https://dam-assets.apps.travisperkins.group/oe00d5n/GPID_1000505813_IMG_00.jpg?width=450&height=300",
          "\u00a373.75 "
    ],
    [
          "Broadfix U Shims Assorted Size & Thickness Tub of 300",
          "Bulk pack of frame fixing packers in a convenient tub for ease of use.Packed in plastic tub\nThicknesses are colour coded for ease of identification\nIdeal for dry lining & joinery projects\nAssorted thickness pack of 1mm, 3mm, 5mm, 6mm & 10mm\nThe 4Trade brand represents trade quality and value for money\n",
          "https://dam-assets.apps.travisperkins.group/mbZAq/GPID_1000090566_IMG_00.jpg?width=450&height=300",
          "\u00a332.98 "
    ],
    [
          "Stanley FatMax Box Beam Level 48in",
          "Accurate and durable. Best in class accuracy of 0.5mm/m on all working planes. Solid box beam construction for added durability and product life.Vials magnified by 20% for improved all round visibility\nDual machined levelling surfaces for maximum accuracy\nBi-material hand grips are screwed into the frame\nSolid block vials provide best in class accuracy in 8 orientations of +/-0.5mm/m\nBest in class accuracy of 0.5mm/m on all working planes\nSolid box beam construction for added durability and product life\n",
          "https://dam-assets.apps.travisperkins.group/pz1kw/GPID_1000395777_IMG_00.jpg?width=450&height=300",
          "\u00a348.28 "
    ],
    [
          "VELUX Top Hung Roof Window White Polyurethane 780mm x 1400mm GPU MK08 0066",
          "VELUX top-hung roof windows in a white polyurethane finish are the perfect choice for loft conversions with windows in easy reach. These windows can be opened to any position up to 45 degrees for an unobstructed view and a feeling of extra space. Triple glazed with enhanced energy efficiency and a laminated inner pane for safety.High quality moulded polyurethane with white lacquer finish\nWhite polyurethane surrounding a solid pine core\nTriple glazing with enhanced energy efficiency\nOpens to any position up to 45 degree\nU-value 1.0 W/m2K\nAnti-dew coating\nMoisture resistant\nCan be installed in roof pitches between 15 and 55\u00b0 (up to 75 degrees with Special Springs)\nAddition springs available to accommodate roof pitches from 55 and 75\u00b0\n",
          "https://dam-assets.apps.travisperkins.group/a6EwX/GPID_1000693259_IMG_00.jpeg?width=450&height=300",
          "\u00a31,072.66 "
    ],
    [
          "Bsw Sawn Treated Sleeper Green 100 x 200mm x 2.4m",
          "These UC3 decorative garden sleepers are perfect for raised beds, pathway edges and non-structural applications.User Class 3 treatment against rot\nThey offer the opportunity to create height, depth and undulating areas outside\nPressure Treated with an attractive green finish\n",
          "https://dam-assets.apps.travisperkins.group/oz8l7wy/GPID_1100863296_IMG_00.jpg?width=450&height=300",
          "\u00a331.24 "
    ],
    [
          "Bradstone Traditional Old Riven Autumn Silver Paving Slab 600x300x35mm",
          "A paving solution that is cost effective and good looking. Old Riven offers a stylish solution for the traditional garden design.Sawn edges inspired by natural quarried stone\nBetween two and eight profiles per size to give a more random pattern when laid\nManufactured in Britain using handmade masters made for Natural Stone\n",
          "https://dam-assets.apps.travisperkins.group/3e8yg/GPID_1000081280_IMG_00.jpg?width=450&height=300",
          "\u00a31,090.98 "
    ],
    [
          "Dulux Trade Vinyl Matt Emulsion 5L Black",
          "A top quality high opacity emulsion based on unique AkzoNobel technology which gives excellent coverage and application as well as a durable finish which lasts everyday living.Excellent Opacity\nTough wipeable finish\nHigh coverage\n",
          "https://dam-assets.apps.travisperkins.group/ormgg5w/GPID_1000139093_IMG_00.png?width=450&height=300",
          "\u00a365.70 "
    ],
    [
          "Polycell Trade Stain Block 500ml Aerosol",
          "Permanently covers a great number of different stains, such as nicotine, soot, rust, grease, ballpoint pen and lipstick.Treats stains caused by water, nicotine, soot, graffiti, grease, wax and rust.\nTreats stains caused by water, nicotine, soot, graffiti, grease, wax and rust\nCan be over painted in around 10 minutes\nAerosol can be over-painted in around 10 minutes\n",
          "https://dam-assets.apps.travisperkins.group/v1611gz/GPID_1000083152_IMG_00.png?width=450&height=300",
          "\u00a317.92 "
    ],
    [
          "Fluidmaster PRO820UK Mechanical Dual Flush Valve",
          "High performance valve that can fits 2? outlets.Minimal water hammer\nFast refill\n",
          "https://dam-assets.apps.travisperkins.group/wLPNm/GPID_1000794152_IMG_00.jpg?width=450&height=300",
          "\u00a327.95 "
    ],
    [
          "Metsa Profi Rubber Strip for Piazza Pro Composite Decking 50m",
          "Enables a yacht like closed deck surface to be achieved with Metsa ProFi Piazza Pro decking.To be fitted after the boards have been installed with T-Clips\nPrevents leaves, food and other materials falling between the deck boards\nEliminates any statitic electricity charge that may occur on roof terraces or other raised deck surfaces\nSufficient ventilation of the underside of the deck must be ensured when Rubber Strip is fitted. (See instructions)\n",
          "https://dam-assets.apps.travisperkins.group/vnem5n6/GPID_1100908505_IMG_01.jpg?width=450&height=300",
          "\u00a394.62 "
    ],
    [
          "Catnic Cougar Open Back Cavity Wall Standard Duty Lintel 2100mm CG110/100",
          "Open Back Cougar Lintels are for use in Cavity Wall construction. The lintels incorporate insulation, built-in plaster key and DPC. The lintels supports uniform distribution of masonry loads, timber floors and roof loads. Also suitable for fair faced inner leaf masonry.Duplex Corrosion Protection\nBuilt-in DPC\nIntegral Plaster Key\nContinuous Insulation\nFormed from galvanised steel then powder coated\nEasy to use Cougar open back profile\nStandard lengths are available in increments of 150mm at lengths up to 3000mm, 300mm at 3000mm-4800mm\n",
          "https://dam-assets.apps.travisperkins.group/AGBZY/GPID_1000194953_IMG_00.jpeg?width=450&height=300",
          "\u00a3307.75 "
    ],
    [
          "Hippo Pro 1 Ultimate Grab Adhesive White 290ml",
          "Using the very latest next generation technology PRO1\u00c2&nbsp;Power Bond will deliver a level of immediate grab strength that is typically double that of most products on the market.Ultimate Strength Grab adhesive that will stick virtually anything to anything\nResistant to weather, extreme temperatures, mould & chemicals.\nIncredible adhesive grab strength \u00e2\u20ac\u201c replaces mechanical fixings.\nLow pick-ability \u00e2\u20ac\u201c perfect for high security areas.\nDoes not contain solvents, isocyanates or phthalates.\n",
          "https://dam-assets.apps.travisperkins.group/v44dyjd/GPID_1100589452_IMG_00.jpg?width=450&height=300",
          "\u00a315.26 "
    ],
    [
          "Mitras Gas Meter Box Key",
          "Our Mitras Gas Meter Box Key are specially selected for the trade, with nationwide delivery available we are the number one builders merchants.For use with all domestic gas meter boxes\nInjection moulded yellow plastic\nSize : 15 x 65 x 48 mm\nSimple to use\n",
          "https://dam-assets.apps.travisperkins.group/MN3z6/GPID_1000194633_IMG_00.png?width=450&height=300",
          "\u00a33.67 "
    ],
    [
          "4Trade Emulsion Wall Brush 5\u201d",
          "All purpose paint brush ideal for use with all paints and for all decorating jobs.Pure bristle\nIdeal for applying emulsion to larger areas\nTraditional, lacquered finish wood handle\n",
          "https://dam-assets.apps.travisperkins.group/v6wnel2/GPID_1000573353_IMG_00.jpeg?width=450&height=300",
          "\u00a38.23 "
    ],
    [
          "JB Kind Montserrat 4 Panel White Primed Door 1981 x 686 x 35mm",
          "White shaker style internal door with four recessed panels, supplied ready primed.White primed\nFour recessed panels\nSolid core construction\n",
          "https://dam-assets.apps.travisperkins.group/v16g9qz/GPID_1100819311_IMG_00.jpg?width=450&height=300",
          "\u00a3122.05 "
    ],
    [
          "Bristan COMP GRAB01 C Grab Bar 342mm Chrome",
          "Add a grab rail for a little extra support.Height 65mm\nWidth 342mm\nDepth 62mm\n",
          "https://dam-assets.apps.travisperkins.group/xkgmre6/GPID_1000704421_IMG_00.jpeg?width=450&height=300",
          "\u00a357.65 "
    ],
    [
          "Readymade Gates Aluminium Receiver Pedestrian Post Black 50mm x 80mm x 2.4m",
          "The 80mm x 50mm aluminium pedestrian gate posts have been designed with the installer in mind, with easy to fix hinge points built inThe 80mm x 50mm aluminium pedestrian gate posts have been designed with the installer in mind\nThe posts come with easy to fix hinge points built in, and are available in either 2000mm or 2400mm lengths.\nThe removable base plate allows for a firm fixing to a solid base and the built-in access points allow for multiple wall fixings to make the installation more secure.\nThe receiver post has the same fixing options and comes with a full-length lock keep which inserts in to the post for extra privacy.\n5 year warranty on the structure and finish\n",
          "https://dam-assets.apps.travisperkins.group/v6we114/GPID_1100898809_IMG_00.PNG?width=450&height=300",
          "\u00a395.11 "
    ],
    [
          "1000 mm x 75 mm x 75 mm Supreme Concrete Fencing Repair Spur SPR100",
          "This concrete fencing repair spur from Supreme Concrete is ideal for supporting fence panels. This product reinforces and strengthens the fence, preventing further damage.Easy and hassle-free installation\nStrong and durable fencing supply\nResistant to rusting\nAlternative for wooden board\nSuitable for windy situations or high fences\nResistant to moisture\n",
          "https://dam-assets.apps.travisperkins.group/lv0mv/GPID_1000198116_IMG_00.jpeg?width=450&height=300",
          "\u00a325.48 "
    ],
    [
          "Flatpack Sink Base Unit Shaker Ultra Matt Light Grey 600mm - FKKH0735",
          "Kitchen Kit is the easy new choice for trade kitchens. For over 30 years they been manufacturing the highest quality kitchens right here in the UKDelivery Information - 3 days for mainland UK, up to 12 days for NI, Highlands and Islands\n19mm Two Piece MDF Traditional Shaker Door with Durable Foil\nQuick Build Flatpack 18mm Cabinet with 8mm Back. FIRA Level H Certification\nAdjustable Legs with 49mm service void at the rear\nAdjustable Shelf\nDoors Can be hinged on left or right side using soft close hinges\nVoid in top panel of unit to assist with sink and hob installation\n",
          "https://dam-assets.apps.travisperkins.group/xgyq6dn/GPID_1100894242_IMG_00.jpg?width=450&height=300",
          "\u00a3121.62 "
    ],
    [
          "ERA Security Door Chain",
          "The Windsor Inline Sprung Lever Lever Door Handle is designed to operate a Multi Point Lock with a Euro Cylinder. The handles screw fixings are located below the lever and at the bottom of the backplate to fit locks with a screw hole dimension of 122mm. The Windsor has been designed with a shorter 28mm wide backplate for new doors or replacing handles on existing doors.Strong and simple to use\nCan only be unlocked when the door is closed\nEasy release when the door is closed\nQuick and easy locking/unlocking\nSuitable for PVCu and Timber Doors\nAllows minimal opening for conversation\n",
          "https://dam-assets.apps.travisperkins.group/xw424qk/GPID_1100905527_IMG_00.jpg?width=450&height=300",
          "\u00a38.03 "
    ],
    [
          "22mm x 150mm x 3.6m Sawn Softwood Carcassing Treated Green",
          "High quality treated sawn timber for general construction usesHigh Pressure treated with Tanalith 'E' (or similar)\nIt is important that all cut ends are re-sealed with a proprietary treatment\nAdditional lengths may be available - please contact us for further information\n",
          "https://dam-assets.apps.travisperkins.group/v44qy6e/GPID_1000190297_IMG_00.jpeg?width=450&height=300",
          "\u00a39.55 "
    ],
    [
          "Dulux Trade Vinyl Matt 5L Berry Smoothie",
          "A top quality high opacity emulsion based on unique AkzoNobel technology which gives excellent coverage and application as well as a durable finish which lasts everyday living.A top quality high opacity emulsion based on unique AkzoNobel technology which gives excellent coverage and application as well as a durable finish which lasts everyday living.\nExcellent Opacity\nTough wipeable finish\nPlease note: The colour on screen may appear different from the paint.\nPlease note: Product is non-refundable\n",
          "https://dam-assets.apps.travisperkins.group/lJZ35/GPID_1100431439_IMG_00.jpg?width=450&height=300",
          "\u00a352.93 "
    ],
    [
          "Easy Trim Easyridge F Hip Accessory Kit 6m",
          "Kit Contents: 5 Hip Trays, 26 Short Leg Ratchet Clips, 20 Long Hip Clips And 20 Short Hip Clips.5 Hip Trays\n26 Short Leg Ratchet Clips\n20 Long Hip Clips\n20 Short Hip Clips\nUsed In Conjunction With A Ridge F Plus Dry Ridge Kit\n",
          "https://dam-assets.apps.travisperkins.group/G208A/GPID_1000724395_IMG_00.jpg?width=450&height=300",
          "\u00a336.00 "
    ],
    [
          "Sandtex Trade High Cover Smooth 10L Brilliant White",
          "A smooth masonry paint specially formulated for the professional user, which provides a quality protective and decorative finish. It can be applied to most correctly prepared sound exterior masonry surfaces including rendering (stucco) roughcast, pebbledash and tyrolean; building blocks, concrete and facing bricks, exterior cement-based boards.Excellent opacity\nHighly durable\nDirt resistant\nCovers fine cracks\n",
          "https://dam-assets.apps.travisperkins.group/lzGd6/GPID_1000026447_IMG_00.jpg?width=450&height=300",
          "\u00a368.98 "
    ],
    [
          "Bedec Barn Paint Black 5L",
          "Acrylic water based barn paint is ideally suited to the protection of exterior wooden, metal and plastic cladded buildings. It can be applied to previously painted surfaces even those coated with weathered bitumen, tar varnish or creosote. It is tough, durable and has excellent colour retention. It will flex with the substrate rather than flake or crack. Suitable for many applications including fencing, posts, guttering and weathered galvanising without the need for a primer.Can be used on varnished, creosote or bitumen coated surfaces\nExcellent colour retention\nExcellent resistance against cracking, blistering and flaking\nResistance against rain and severe weather, rot and algae build-up and sunlight (UV)\nUse on wood, galvanised steel, plastic, concrete, brick and cladding\nMulti-surface application\nEasy to apply\n",
          "https://dam-assets.apps.travisperkins.group/laGeJ/GPID_1000272332_IMG_00.jpeg?width=450&height=300",
          "\u00a386.03 "
    ],
    [
          "Duck Tape Ultimate 50mm x 50m White",
          "Duck Tape is tough, strong, waterproof, seals, reinforces, bundles and protects. Perfect for fixing, binding &amp; repairing.Sticks firmly to most surfaces\nFor interior and exterior projects\nTough\nEasy to tear\n",
          "https://dam-assets.apps.travisperkins.group/v1614nr/GPID_1000028688_IMG_00.jfif?width=450&height=300",
          "\u00a310.79 "
    ],
    [
          "Honeywell ST9400S 1 Day 2 Channel Service Programmer",
          "ST9400S is a two channel 1 day programmer with independent timing for control of heating and hot water zones.There is a built in Service Interval reminder that can be adjusted to offer a message, or restricting action, when an annual system service falls due\nST9400S has the new and ground-breaking Line of Text (LoT\u2122) display that gives clear plain English instructions whenever any button or slider is used\nUp to 3 events per day\nAutomatic summer and winter time change\nSingle pole, double throw (SPST) relay\n230V AC 50Hz 10W Power supply\nOperating temperature range 0 to 40\u00b0C\nConforms to EN60730-2-7\nTemporary or permanent override facilities\nLarge backlit display\n",
          "https://dam-assets.apps.travisperkins.group/lm3qA/GPID_1000354707_IMG_00.jpeg?width=450&height=300",
          "\u00a3139.43 "
    ],
    [
          "Energizer Alkaline Power 9V 522 BP Battery",
          "Energizer Alkaline Power Batteries are a great choice for your low drain day-to-day electronic devices. At a lower cost than premium alternatives, this cost-effective battery benefits from the Energizer brand, at a much lower price.Long lasting energy\nGreat resistance to leakage\nReliable, up to 10 years shelf life in storage ( AA/AAA / C/ D )\nIdeal for everyday devices used at work or at home.\nGreat Value and Performance\n",
          "https://dam-assets.apps.travisperkins.group/odJgz/GPID_1100629608_IMG_00.png?width=450&height=300",
          "\u00a34.67 "
    ],
    [
          "Bosch Serie 2 Pyramid Chimney Cooker Hood 60cm Stainless Steel - DWP64BC50B",
          "Bosch Serie 2, Wall-mounted cooker hood, 60 cm, Stainless steel, this Pyramid hood has perfect performance matching your kitchen. Max. extraction rate: 365 m3/h, Noise, max. speed in normal use: 66dB. Push botttuon control, 3 speed settings, and 2 x 1.5W LED lights. 2 removable metal grease filter cassettes, this hood can be installed ducted or recirculatedQuickly clears the air in a small kitchen, extractions rate of  365 m3/h\nSuitable for use above a standard-sized hob\nEfficient LED lights help you monitor food as it cooks\nEasy-to-use push button controls\n",
          "https://dam-assets.apps.travisperkins.group/xkg8176/GPID_1100755244_IMG_00.jpg?width=450&height=300",
          "\u00a3282.85 "
    ],
    [
          "Clark-Drain Galvanised Steel 10 Tonne Manhole Cover and Frame Driveway Block Paviour Recessed Tray 450mm x 600mm",
          "Manufactured using galvanised steel, this manhole cover by Clark-Drain creates a robust cover with a load rating of 10 tonnes. Ideal for use in driveways and restricted access areas, the cover can be rotated to fit with the design of the surface finish for convenience.Steel construction with a polypropylene frame\nIntegral lifting keys for easy handling\nManufactured as a one-piece pressed cover for extra strength\nEasy installation with provided instructions\nMoulded grouting flanges\nRecessed for 65mm block paving or slabs\nDurable construction\nGalvanised for resistance to rusting and corrosion\nGalvanised to BS EN 1461\n",
          "https://dam-assets.apps.travisperkins.group/4gzz3/GPID_1000082366_IMG_00.jpg?width=450&height=300",
          "\u00a3116.66 "
    ],
    [
          "Travis Perkins White Primed 6 Panel Grain Hollow Core Door 1981 x 610 x 35mm",
          "The six panel grained door, offers excellent appearance, performance and value, a good choice for the modern home. 1981mm high and 35mm thick, available in 610mm width (340123), 686mm (340130), 762mm (340131) and 838mm (340132)Does not include door furniture as it is sold separately\nThis door is supplied primed and ready to paint\nDoor may be trimmed by up to 10 mm in height or width, any reductions must be removed equally from each edge\nTimber is certified by the Forest Stewardship Council\nThis door is supplied primed and ready to paint. It is not suitable for treatment with any type of oil, varnish, wax or polish\nExcellent value for money\nInterior Moulded Door\n",
          "https://dam-assets.apps.travisperkins.group/abpJX/GPID_1000192402_IMG_00.jpeg?width=450&height=300",
          "\u00a350.40 "
    ],
    [
          "Travis Perkins Suffolk Grained Moulded FD30 Door 2040 x 726 x 44mm",
          "These Moulded Suffolk Grain Firedoors are suitable for Inspected work in Schools, Hospitals, Doctor's Surgeries, Pubs, Hotels, Offices, Industry, Shops or at home, for inspection by your Building Inspector or Fire Officer.\u00ad Suffolk Grain Fire Doors have a Framed Timber internal door construc\u00adtion.Textured woodgrain oak veneer finish\nMixed material construction combines one piece grain effect facings, timber and man-made materials\nFire resistant (FD30)\nNot suitable for treatment with any type of oil, stain, varnish, wax or polish\nPrimed and ready to paint\n",
          "https://dam-assets.apps.travisperkins.group/ddP8A/GPID_1000324545_IMG_00.jpg?width=450&height=300",
          "\u00a3150.82 "
    ],
    [
          "Frelan Hardware Jedo Paris Bathroom Lever Handle Set Polished Chrome",
          "The Paris Suite Lever on Bathroom Plate in Polished Chrome is an affordable door handle on backplate crafted from high quality materials with an extremely high standard zinc finish. The perfect contemporary handle that is easily maintained and seamlessly settles into any modern interior spaces.Zinc\nDomestic use only\n",
          "https://dam-assets.apps.travisperkins.group/AGWBG/GPID_1100679845_IMG_00.jpg?width=450&height=300",
          "\u00a314.71 "
    ],
    [
          "Suffolk Oak Veneer Glazed 5 Panel Door 1981 x 686 x 35mm",
          "Our Oak veneer doors are sturdy enough to reduce sound transmission and maintain heat. They look great in both modern and traditional homes, and each door is supplied unfinished ready to paint, stain or varnish.This oak Veneered door will look great in both modern and traditional homes\nMixed material construction using timber, real wood veneers and man-made materials\nEngineered composite core construction for greater resistance to warping, twisting and splitting than traditional timber doors\nProduct supplied unfinished, suitable finishing products include, Ronseal Trade Polyurethane Varnish and Osmo door oil\nExtra thick lipping allows you to trim up to 20mm in width and 20mm in height from the door\n3 x 76mm or 100mm butt hinges should be fitted to this door. Door furniture is sold separately\nThe large 6 light clear glazed panel features certified toughened clear glass to give you peace of mind\nStandard, Bifold and Fire Door versions in this range are also available\nThis is a natural timber product and variances in texture, colour and grain may be apparent\n",
          "https://dam-assets.apps.travisperkins.group/9o9JX/GPID_1000488642_IMG_00.jpeg?width=450&height=300",
          "\u00a3175.01 "
    ],
    [
          "Premdor Moulded Ladder Smooth FD30 Fire Door 1981 x 838 x 44mm",
          "Our Ladder design is ideal for modern and minimalist interiors. This ladder effect door provides the perfect blank canvas for either simple or bold decorative finishes.Conforms to FD30 codes\nConstructed with mixed materials including 1 piece smooth facings, timber and man-made materials\nSupplied unfinished, primed and ready to paint or stain\nNot suitable for treatment/finishing with any kind of oil, wax or polish\nFire Doors must not be trimmed on top edge, only up to 5mm on bottom edge and 3mm on stiles\nAlso available in the standard version\nVisit the Certification Scheme Website for the latest Certificate\n",
          "https://dam-assets.apps.travisperkins.group/ddP5L/GPID_1000566602_IMG_00.jpg?width=450&height=300",
          "\u00a3132.24 "
    ],
    [
          "K Rend Hpx Base",
          "Ultra high performance basecoat render for use on unusual substrates.For use on low density backgrounds (Lightweight block)\nHand or machine applied\nUsed as backing for K Rend finishes\nPolymer modified, fibre reinforced and cement based\nImproved crack resistance\nImproved adhesion.\nOutstanding flexibility\n",
          "https://dam-assets.apps.travisperkins.group/om5mwjw/GPID_1000268777_IMG_00.png?width=450&height=300",
          "\u00a335.93 "
    ],
    [
          "SPAX T-Star Flat Countersunk Screw Wirox Coated 6 x 120mm Qty 100",
          "SPAX is a global brand specialising in the manufacture of professional woodscrews from its factory based in Germany.4CUT POINT effectively reduces the splitting of wood when working close to the edge\nWIROX Coating provides higher  corrosion resistency compared to YELLOX with the environmental and health benefits of being Chrome(VI) free\nMULTI-HEAD Flat Countersunk flush fitting head that cuts through wood and stops on metal\nT-STAR bit recess gives precise fitting with significantly more contact surface area points compared to POZI and is ideal for higher force transmision with reduced bit slip\n",
          "https://dam-assets.apps.travisperkins.group/o35knq8/GPID_1010003478_IMG_00.png?width=450&height=300",
          "\u00a335.63 "
    ],
    [
          "Artemis Breakfast Bar Cotswold 2000 x 960 x 30mm",
          "Artemis Acrylic\u2019s stone-effect colours run solidly throughout its thickness, creating a luxury finish that\u2019s also hugely practical. Available in an array of beautiful tones, the Artemis Acrylic worktop range provides the luxury finish customers desire, with colours to blend elegantly with kitchens of every style.Cost effective\nShort lead times\nEasy to install\nSeamless joints\nDurable and hardwearing\nLook and feel of natural stone\nRange of colour tones\nNon-porous and hygienic\nColour right through\nTen year warranty\n",
          "https://dam-assets.apps.travisperkins.group/o8r2w0q/GPID_1100903754_IMG_00.jpg?width=450&height=300",
          "\u00a3874.28 "
    ],
    [
          "Sawn Treated Timber Regularised C16/C24 47mm x 250mm x 4.8m",
          "Regularised (consistent dimensions) by planing all round with 'eased' (rounded) corners for comfortable handling. Our regularised carcassing finishes 2mm off nominal thickness and 5mm off nominal width.High Pressure treated with Tanalith 'E' (or similar)\nKiln dried to help improve stability and straightness\nStrength graded to C16/C24 for known structural performance\nIt is important that all cut ends are re-sealed with a proprietary treatment\nAll of our softwoods are responsibly sourced\nAdditional lengths may be available - please contact us for further information\n",
          "https://dam-assets.apps.travisperkins.group/lv3ev/GPID_1000321728_IMG_00.jpeg?width=450&height=300",
          "\u00a348.55 "
    ],
    [
          "Karcher K2 Universal Home Pressure Washer",
          "Make short work of any outdoor cleaning job with the Karcher K 2 Universal Pressure Washer - an essential that no garage or shed should be without. This model comes with a Home Kit, which includes a T 150 patio cleaner, and Patio &amp; Deck detergent. A 3m high pressure hose gives you plenty of reach while you're tackling stubborn dirt, it's ideal for cleaning patios and other hard surfaces in your outdoor space. The lightweight design of the K 2 Universal means it's easy to move around with you, but it's still just as sturdy and durable as you'd expect from a Karcher pressure washer. Despite being compact, there's still on-board storage that keeps the trigger gun, hose and lance neatly stored away.Everything You Need For Outdoor Cleaning - An accessory kit including a T 150 Patio Cleaner and Patio & Deck detergent helps you clean large outdoor areas quickly and easily.\nBuilt To Clean Hard Surfaces - The Dirt blaster lance removes stubborn dirt from hard surfaces, such as stone and brickwork.\nEasy To Move Around - The lightweight design and carry handle makes this long-lasting machine easy to transport.\nEverything In One Place - Keep everything you need close to hand with on-board storage for the lance and cable.\n",
          "https://dam-assets.apps.travisperkins.group/pyk1n/GPID_1100769012_IMG_00.jpg?width=450&height=300",
          "\u00a3105.06 "
    ],
    [
          "Multipanel Classic Bathroom Wall Panel Unlipped 2400 x 598mm Warm Mica 835",
          "Multipanel waterproof wall panels are the best kept secret in bathroom renovations. The Classic Collection has been crafted to compliment a wide range of interiors. With a cream textured finish this panel is perfect for creating the ultimate environment for relaxation. Small descrete flecks that shine as the light hits them add real interest to your design.Completely waterproof with 30 year guarantee\nOn-trend colour\nQuick and easy to install with no need to use grout\nEasy to clean\nSeamless joints between panels with Hydro-Lock\nHygienic\nVast range of colour options\nFSC Forest friendly certified\nMade in Britain\n",
          "https://dam-assets.apps.travisperkins.group/0l720/GPID_1000704345_IMG_01.jpg?width=450&height=300",
          "\u00a3294.67 "
    ],
    [
          "British Gypsum Gyproc Moisture Resistant Tapered Edge 2400mm x 1200mm x 12.5mm",
          "Gyproc Moisture Resistant plasterboard is specifically designed to tolerate moist and humid conditions. Its silicone additives along with its water repellent liners help achieve a product that is perfect for use in, Bathrooms and kitchens where levels of humidity are significantly higher. This impressive plasterboard absorbs less than 5% of water, provides great fire protection and acoustic insulation where needed. This product is ideal for semi exposed areas and is a must for any Bathroom or kitchen construction.Boards won't need to be replaced after exposure to high humidity\nHelps prevent structural damage caused by moisture\nReduces the risk of mould and staining caused by moisture\nAchieves H1 water absorption according to EN 520\nGreen paper lining for easy identification\n",
          "https://dam-assets.apps.travisperkins.group/1z1rb/GPID_1000134727_IMG_00.jpeg?width=450&height=300",
          "\u00a327.54 "
    ],
    [
          "Polycell Trade Stain Block Liquid 1L",
          "Permanently covers a great number of different stains, such as nicotine, soot, rust, grease, ballpoint pen and lipstick.Treats stains caused by water, nicotine, soot, graffiti, grease, wax and rust.\nFor interior use\nDries in 10 minutes\nApply with a brush\n",
          "https://dam-assets.apps.travisperkins.group/xp8e8gg/GPID_1000200301_IMG_00.png?width=450&height=300",
          "\u00a327.58 "
    ],
    [
          "Windsor 3 Column Vertical White 1800mm x 578mm",
          "Create your unique look with the traditional column radiator. Available in 2 and 3 column configurations and a range of sizes and colours, choosing the perfect radiator for you could not be easier. Each radiator is supplied with wall mounting brackets, air vent and blanking plug10 year guarantee\nSteel radiator finished in white RAL 9016\nSupplied with all fixtures and fittings. All components use British standard fittings\nTested to BS EN 442 standards\nSuitable for any central heating systems\nSafety tested at 13 bar pressure. The pressure in your home will normally be well under 5 bar\n",
          "https://dam-assets.apps.travisperkins.group/EkAG1/GPID_1100383989_IMG_00.jpg?width=450&height=300",
          "\u00a3924.46 "
    ],
    [
          "Makita BRUSHLESS4040 191B26-6 Xgt Battery 4.0AH 40V Max",
          "40V 4ah batteryGreatly Increased Water And Drop Impact Resistance\nDigital Communication Between The Battery And The Tool And Battery And The Charger\nDigital Communication Between The Battery And The Charger\nThanks To The Tool/battery Communication The Potential Extraction Rate Of Xgt Li-ion Battery Is Higher Than That Of The Lxt Li-ion Battery\n",
          "https://dam-assets.apps.travisperkins.group/o3540qg/GPID_1100691179_IMG_01.jpg?width=450&height=300",
          "\u00a3194.75 "
    ],
    [
          "Dulux Trade Vinyl Matt 5L Fresh Artichoke",
          "A top quality high opacity emulsion based on unique AkzoNobel technology which gives excellent coverage and application as well as a durable finish which lasts everyday living.A top quality high opacity emulsion based on unique AkzoNobel technology which gives excellent coverage and application as well as a durable finish which lasts everyday living.\nExcellent Opacity\nTough wipeable finish\nPlease note: The colour on screen may appear different from the paint.\nPlease note: Product is non-refundable\n",
          "https://dam-assets.apps.travisperkins.group/7yYbQ/GPID_1100347277_IMG_00.jpg?width=450&height=300",
          "\u00a352.93 "
    ],
    [
          "Cill Stld Rend T4-40 Bath 1198 x 175 x 140",
          "Cill Stld Rend T4-40 Bath 1198 x 175 x 140Made from durable cast stone materials\nEasy installation\nPrevent water damage\n",
          "https://dam-assets.apps.travisperkins.group/v446dme/GPID_1100977055_IMG_00.png?width=450&height=300",
          "\u00a3171.68 "
    ],
    [
          "Paslode 141257 Stainless Steel Ring Handy Pack 51 x 2.8mm",
          "Paslode Handy Packs contain 1100 Nails and 1 Fuel Cell.Suitable for interior and exterior use\nHead size 2.8mm\n",
          "https://dam-assets.apps.travisperkins.group/Q0vR5/GPID_1000208539_IMG_00.jpeg?width=450&height=300",
          "\u00a3121.34 "
    ],
    [
          "Velux Top Hung Roof Window 780 x 1178mm White Polyurethane GPU MK06 0070",
          "VELUX top-hung roof windows in a white polyurethane finish are the perfect choice for loft conversions with windows in easy reach. These windows can be opened to any position up to 45 degrees for an unobstructed view and a feeling of extra space. Laminated safety glazing as standard with a toughened outer paneHigh quality moulded polyurethane with white lacquer finish\nWhite polyurethane surrounding a solid pine core\nTop-hung operation, ideal for maximising panoramic view\nOpens to any position up to 45 degree\nU-value 1.3 W/m2K\nLaminated inner pane\nMoisture resistant\nCan be installed in roof pitches between 15 and 55\u00b0 (up to 75 degrees with Special Springs)\nAddition springs available to accommodate roof pitches from 55 and 75\u00b0\n",
          "https://dam-assets.apps.travisperkins.group/BJOzN/GPID_1000693559_IMG_00.jpeg?width=450&height=300",
          "\u00a3657.80 "
    ],
    [
          "Marshalls Heritage Yorkstone Paving Pack 600x600x38mm Pack of 22",
          "The Heritage paving pack by Marshalls is available in a variety of colours to suit multiple property styles. Manufactured from split stone flags with mason fettled edges, this concrete garden paving slab has a slightly riven finish to create a natural stone effect in gardens and pathways.Heritage range includes circle kit, octant kit, walling, copings and radius copings\nAvailable in 4 choice of colours - Yorkstone, old yorkstone, calder brown and weathered yorkstone\nLightly textured non-slip surface to prevent falls\nAlso available in 6 different sizes\nA trusted favourite with customers in Britain\n",
          "https://dam-assets.apps.travisperkins.group/o35526j/GPID_1000135877_IMG_00.jpeg?width=450&height=300",
          "\u00a3904.46 "
    ],
    [
          "Jb Kind White Mistral Primed Bifold Internal Door 1981 x 762 x 35mm",
          "Contemporary white primed bi-fold internal door, flush with grooved panel effectLadder style panels grooved into MDF\nWhite Primed\nSupplied ready hinged with pivots, brackets and a sliding track. Please note that the Bi-Fold supplied is slightly smaller than the size listed to accommodate tracking.\nFlush\nStandard core construction\n",
          "https://dam-assets.apps.travisperkins.group/qwPGX/GPID_1100588556_IMG_00.jpg?width=450&height=300",
          "\u00a3180.62 "
    ],
    [
          "Simpson JHM225/150 Masonry Supported Joist Hanger",
          "The JHM range of joist hangers can be\r\nused to connect solid-sawn joists, trusses and\r\nengineered joists to masonry walls or steel\r\nbeams.Built-in inspection slot at the base of the hanger to aid inspection from the ground\nThe top flange provides the widest area in contact with masonry support allowing superior performance\nEmbossments on JHM stiffen top flange and holes allowing improved mortar keying.\nSafe working load for joists shot fired to steel girders is 5.17kN\nJHM side flange on deeper hangers is much higher than the traditional style, providing greatly enhanced resistance to joist rotation\n",
          "https://dam-assets.apps.travisperkins.group/xdm9qp3/GPID_1000026232_IMG_00.jpg?width=450&height=300",
          "\u00a39.78 "
    ],
    [
          "Multipanel Linda Barker Bathroom Wall Panel Unlipped 2400 x 598mm Ferro Grafite 9483",
          "You can afford to give your bathroom the love it deserves with Concrete Elements from the Linda Barker Collection of waterproof wall panels for Multipanel. With subtle grey hues and a textured finish, this completely waterproof wall panel has an ultra-modern urban feel and will look great in bathrooms, both large and small. Near invisible joints using Hydrolock\u00ae technology provide almost seamless and completely waterproof joints. Panels can be fitted on top of tired mould-ridden tiles, and on almost any other surface such as wood and concrete. When it comes to care and maintenance, Multipanel practically looks after itself \u2013 a quick wipe is all that\u2019s needed to keep panels looking perfect for years to come. Panels also come with a 15 year guarantee.Completely waterproof with 30 year guarantee\nOn-trend colours and textures\nQuick and easy to install with no need to use grout\nEasy to clean\nDurable\nHygienic\nVast range of colour options\nFSC Forest friendly certified\nMade in Britain\n",
          "https://dam-assets.apps.travisperkins.group/erlkq/GPID_1100398200_IMG_01.jpg?width=450&height=300",
          "\u00a3136.37 "
    ]
]
  const [product, setProduct] = useState(null);
  const [basketFill, setBasketFill] = useState([]);
  const [basketView, setBasketView] = useState(false);
  //console.log('user in Home =');
  //console.log(user);


  useEffect(() => {
    function handleSearch () {
      console.log(search);
      let searches= [];
      for (let i = 0; i < products.length; i++) {
        //console.log(products[i][0]);
        if ((products[i][0].toLowerCase()).includes(search.toLowerCase()) ){// && search != '') {
          console.log(products[i][0]);
          searches.push(
            //<Text> {products[i][0]} </Text>
            //<Button title={products[i][0]} color="black" onPress={() => handleProduct(products[i])} />
            <TouchableHighlight onPress={() => handleProduct(products[i])}>
              <View style={styles.button}>
                <Text>{products[i][0]}</Text>
              </View>
            </TouchableHighlight>
          )
        }
      }
      console.log(searchResults);
      setSearchResults(searches);
    }
    handleSearch(searchResults);
  }, [search]);

  const handleProduct = (product) => {
    setProduct(product);
    console.log(product);
  }

  const nullProduct = () => {
    setProduct(0);
    console.log(product);
  }

  const inBasket = (product) => {
    for (let i = 0; i < basketFill.length; i++) {
      if (basketFill[i][0] == product[0]) {
        return i+1;
      }
    }
    return false;
  }

  const addToBasket = (product) => {
    let basket = basketFill;
    const index = inBasket(product);
    if (index) {
      basket[index-1][1] += 1;
    }
    else {
      basket.push([product[0], 1, product[3]]);
    }
    setBasketFill(basket);
  }

  return (
    <ScrollView>  
      {product && !basketView ? (
        <ProductScreen product={product} handleProduct={handleProduct} addToBasket={addToBasket} user={user}/>
      ) : (null)}
      {!product && !basketView ? (
        <>
          <TextInput
            placeholder="🔎 Type Search here"
            value={search}
            onChangeText={setSearch}
          />
          {searchResults}
        </> 
      ) : (null)}   
      {basketView ? (
        <BasketScreen basketFill={basketFill} setBasketFill={setBasketFill}
        setBasketView={setBasketView} user={user}/>
      ) : (null)}
      {!basketView && user.role != 'admin' ? (
        <Button title='Basket' onPress={() => setBasketView(true)}/>)
        : (null)}
      
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
});

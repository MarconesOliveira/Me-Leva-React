import * as L from "leaflet";
const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

const busIcon = new LeafIcon({ iconUrl: "../img/new_img/driver.svg" });
const schoolIcon = new LeafIcon({ iconUrl: "../img/new_img/institution.svg" });
const studentIcon = new LeafIcon({ iconUrl: "../img/new_img/student.svg" });

export { busIcon, schoolIcon, studentIcon };

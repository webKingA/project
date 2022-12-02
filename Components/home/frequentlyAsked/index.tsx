import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {BsPatchQuestion} from "react-icons/bs"
import style from "./style.module.css";
export default function FrequentlyAsked() {
  const [expanded, setExpanded] = React.useState<
    string | false
  >(false);

  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={style.container_frequentlyAsked}>
      <h4>پرسشش های متداول:</h4>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{boxShadow:"-1px 1px 5px 1px rgb(0,0,0,0.2)",borderRadius:"10px"}}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <BsPatchQuestion color="#8A8B8D" style={{margin:"0 8px"}}/>
          <Typography sx={{ width: "33%", flexShrink: 0,fontFamily:"v",color:"#8A8B8D",fontSize:"13px" }}>
           چند روز قبل از پرواز، بلیط هواپیما بخریم
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{boxShadow:"-1px 1px 5px 1px rgb(0,0,0,0.2)",borderRadius:"10px"}}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <BsPatchQuestion color="#8A8B8D" style={{margin:"0 8px"}}/>
          <Typography sx={{ width: "33%", flexShrink: 0,fontFamily:"v",color:"#8A8B8D",fontSize:"13px" }}>
           چند روز قبل از پرواز، بلیط هواپیما بخریم
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{boxShadow:"-1px 1px 5px 1px rgb(0,0,0,0.2)",borderRadius:"10px"}}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <BsPatchQuestion color="#8A8B8D" style={{margin:"0 8px"}}/>
          <Typography sx={{ width: "33%", flexShrink: 0,fontFamily:"v",color:"#8A8B8D",fontSize:"13px" }}>
           چند روز قبل از پرواز، بلیط هواپیما بخریم
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{boxShadow:"-1px 1px 5px 1px rgb(0,0,0,0.2)",borderRadius:"10px"}}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <BsPatchQuestion color="#8A8B8D" style={{margin:"0 8px"}}/>
          <Typography sx={{ width: "33%", flexShrink: 0,fontFamily:"v",color:"#8A8B8D",fontSize:"13px" }}>
           چند روز قبل از پرواز، بلیط هواپیما بخریم
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

import { Box } from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const InfoProject = () => {
  return (
    <Box className="flex items-center">
   
      <div className="flex flex-col md:flex-row items-center font-bold mb-1 md:mb-0">
        <p className="text-xs md:text-sm">Project Document :</p>
        <div className="flex items-center ml-0 md:ml-2">
          <p
            className="text-xs md:text-sm bg-yellow-200 flex items-center justify-center text-gray-700"
          >
            download
            <span className="ml-1 -mt-px text-xs md:text-sm bg-yellow-200">
              <CloudUploadOutlinedIcon fontSize="small" />
            </span>
          </p>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center pl-0 md:pl-10 mb-1 md:mb-0">
        <p className="text-xs md:text-sm">Doners :</p>
        <p className="text-xs md:text-sm ml-0 md:ml-2 bg-yellow-200 flex items-center justify-center">
          COVS
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row items-center pl-0 md:pl-10">
        <p className="text-xs md:text-sm">Project Code :</p>
        <p className="text-xs md:text-sm ml-0 md:ml-2 bg-yellow-200 flex items-center justify-center">
          Moo165
        </p>
      </div>
    </Box>
  );
};

export default InfoProject;

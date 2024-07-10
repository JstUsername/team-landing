/// <reference types="vite-plugin-svgr/client" />
import { Typography, Box } from '@mui/material';
import { Popup, PopupLink } from './PopupForm.styled';
import ArrowRight from '../assets/arrow-right.svg?react';
import PopupSuccess from '../assets/popup-success.svg?react';

const PopupForm = ({ handleReturnForm }: { handleReturnForm: () => void }) => {
  return (
    <Popup>
      <Typography variant="popupTitle">Форма успешно отправлена</Typography>
      <PopupSuccess />
      <Box paddingTop="16px" paddingBottom="16px">
        <PopupLink href="#" onClick={handleReturnForm}>
          <Typography>Вернуться к форме</Typography>
          <Box display="flex" padding="5px" marginLeft="16px">
            <ArrowRight />
          </Box>
        </PopupLink>
      </Box>
    </Popup>
  );
};

export default PopupForm;

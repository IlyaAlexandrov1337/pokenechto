import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import {
  Box,
  Button,
  Collapse,
  Modal,
  Stack,
  Zoom,
} from '@mui/material';
import React, {
  useCallback, useState,
} from 'react';

import { useModalStyles, useStyles } from './style';
import TableComponent from './TableComponent';

type Props = {
  money: number,
  mushrooms: number,
};

const WalletComponent: React.FC<Props> = ({ money, mushrooms }) => {
  const classesM = useModalStyles();
  const classes = useStyles();
  const [isDropped, setIsDropped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDrop = useCallback(() => {
    setIsDropped(true);
  }, []);

  const handleSqueeze = useCallback(() => {
    setIsDropped(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={classes.container}>
      <TableComponent money={money} mushrooms={mushrooms} />
      <Modal
        open={isOpen}
        hideBackdrop
      >
        <Zoom in={isOpen} onEntered={handleDrop}>
          <Box className={classesM.box}>
            <Collapse in={isDropped} onExited={handleClose}>
              <Stack className={classesM.boxInner} spacing={2}>
                <div>
                  <h2 style={{ textAlign: 'center' }}>Баланс</h2>
                  <TableComponent money={money} mushrooms={mushrooms} />
                </div>
                <div>
                  <div>Купить $$$</div>
                  <Button variant="contained" disabled>10</Button>
                  <Button variant="contained" disabled>100</Button>
                  <Button variant="contained">1000</Button>
                </div>
                <div>
                  <div>Купить 🍄</div>
                  <Button variant="contained" disabled>10</Button>
                  <Button variant="contained" disabled>50</Button>
                  <Button variant="contained">100</Button>
                </div>
                <Button onClick={handleSqueeze}>Выйти</Button>
              </Stack>
            </Collapse>
          </Box>
        </Zoom>
      </Modal>
      <Button startIcon={<ShoppingBasketRoundedIcon sx={{ color: 'black' }} />} onClick={handleOpen} />
    </div>
  );
};

export default WalletComponent;

import { useEffect, useState, useRef } from 'react';
import {
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button,
} from '@mui/material';

import ReportsTable from './ReportsTable';
import MainCard from '~/components/MainCard';
import { pollMessage, getFile } from '~/telegram';

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem',
};

const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none',
};

const DashboardDefault = () => {
  // TODO: use updateId to keep track latest message
  const [updateId, setUpdateId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const photoListLength = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      pollMessage(setUpdateId).then((messages) => {
        if (messages.length != photoListLength.current) {
          messages.forEach(async (object) => {
            const fileId = object.message.photo.pop().file_id;
            const file = await getFile(fileId);

            while (photoListLength.current < messages.length) {
              setPhotos((oldArray) => [...oldArray, file]);
              photoListLength.current++;
            }
          });
        }
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
        {photos && photos.length > 0 && (
          <ImageList sx={{ height: 350 }} cols={3} rowHeight={1}>
            {photos.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item} height={500} width={500} />
                <Button variant="contained" sx={{ marginTop: '5px' }}>
                  Mint NFT
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
      />

      {/* row 2 */}
      <Grid item xs={12} md={10} lg={10}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Reports</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <ReportsTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;

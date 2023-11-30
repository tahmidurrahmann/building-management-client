import Heading from "../../../components/Heading/Heading";
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { Grid, Paper, Typography } from '@mui/material';

const Location = () => {
    return (
        <div>
            <Heading heading="location"></Heading>
            <div>
                <div style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%2038%20Gulshan%20Ave,%20Dhaka%201212+(THE%20GLASS%20HOUSE)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">Find Population on Map</a>
                    </iframe>
                </div>
            </div>
            <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 3, delay: 1 }} className="max-w-screen-2xl mx-auto">
                <Grid style={{ textAlign: "center" }} container spacing={6} justifyContent="center" alignItems="center" my={6} p={8}>
                    {/* Call Us */}
                    <Grid item xs={12} md={6} lg={4}>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 3, delay: 1 }}>
                            <Paper elevation={3} sx={{ backgroundColor: '#ABCE4E', padding: 4, borderRadius: 3 }}>
                                <div style={{ color: "white", width: 40, margin: '0 auto' }}>
                                    <FiPhoneCall size={26} />
                                </div>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mt: 2 }}>
                                    Call Us
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins', mt: 1 }}>
                                    Phone: 01719991111
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins' }}>
                                    Fax: +6221.2002.2013
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Location */}
                    <Grid style={{ textAlign: "center" }} item xs={12} md={6} lg={4}>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 3, delay: 1 }}>
                            <Paper elevation={3} sx={{ backgroundColor: '#F55D52', padding: 4, borderRadius: 3 }}>
                                <div style={{ color: "white", width: 40, margin: '0 auto' }}>
                                    <SlLocationPin size={26} />
                                </div>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mt: 2 }}>
                                    Location
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins', mt: 1 }}>
                                    38 Gulshan Ave, Dhaka 1212
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins' }}>
                                    Dhaka - Bangladesh
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Email Us */}
                    <Grid style={{ textAlign: "center" }} item xs={12} md={6} lg={4}>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 3, delay: 1 }}>
                            <Paper elevation={3} sx={{ backgroundColor: '#5B9ACF', padding: 4, borderRadius: 3 }}>
                                <div style={{ color: "white", width: 40, margin: '0 auto' }}>
                                    <HiOutlineMail size={26} />
                                </div>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mt: 2 }}>
                                    Email Us
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins', mt: 1 }}>
                                    shantaholdings@gmail.com
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Poppins' }}>
                                    theglasshouse@gmail.com
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </div>
    );
};

export default Location;
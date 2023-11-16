import React from 'react'
import { MantineProvider, Modal, Button} from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import '@mantine/core/styles.css';
import { useState } from 'react';
import { useMutation } from "react-query";
import { RequestVisit } from '../../utils/api';
import { toast } from "react-toastify";




const Request = ({ opened, setOpened, email, propertyId }) => {
    const [value, setValue] = useState(null);

    const handleBookingSuccess = () => {
        toast.success("You have booked your visit", {
          position: "bottom-right",
        });
      };
    
    const { mutate, isLoading } = useMutation({
        mutationFn: () => RequestVisit(value, propertyId, email),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ response }) => toast.error(response.data.message),
        onSettled: () => setOpened(false),
      });
    return (

        <MantineProvider>
         <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Select your date of visit"
          centered
        >
           <div className="flexColCenter" style={{gap: "1rem"}}>
        <DatePickerInput  value={value} onChange={setValue} dropdownType="modal" minDate={new Date()}/>
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
        </Modal>
      </MantineProvider>
       
      )
}

export default Request
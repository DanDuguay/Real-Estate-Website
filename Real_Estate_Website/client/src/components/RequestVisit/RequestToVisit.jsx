import React from 'react'
import { Modal} from "@mantine/core";

const RequestToVisit = ({ opened, setOpened, email, propertyId }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      
    </Modal>
  )
}

export default RequestToVisit
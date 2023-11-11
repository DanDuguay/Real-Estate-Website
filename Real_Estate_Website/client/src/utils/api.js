import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/property/displayProprties", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/property/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const deleteProperty = async (id) => {
  try {
    const response = await api.delete(`/property/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    window.location.href = "/property";
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const updateProperty = async (id, data) => {
  try {
    const response = await api.put(
      `/property/update/${id}`,
      { data },
      {
        timeout: 10 * 1000,
      }
    );

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    window.location.href = "/property";
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const addProperty = async (data) => {
  try {
    console.log("11");

    const response = await api.post(
      "/property/create",
      { data },
      {
        timeout: 10 * 1000,
      }
    );

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    window.location.href = "/property";
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
export const submitPropertyOffer = async (offerData) => {
  try {
    const response = await api.post("/offer/submitOffer", offerData, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    toast.success("Property offer submitted successfully");
    // You can perform additional actions after a successful offer submission
    return response.data;
  } catch (error) {
    toast.error("Something went wrong while submitting the property offer");
    throw error;
  }
};

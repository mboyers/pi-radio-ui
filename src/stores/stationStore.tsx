import create from 'zustand';
import axios from "axios";

type Station = {
    dialPosition: number;
    name: string;
    uri: string;
};

type State = {
    data: Station[] | [];
    loading: boolean;
    fetchData: () => Promise<void>;
    updateData: (newData: Station[]) => void;
    persist: () => Promise<void>;
};

export const useStationStore = create<State>((set, get) => ({
    data: [],
    loading: false,
    error: null,

    fetchData: async () => {
        if (!get().loading) {
            set({ loading: true });
            try {
                const response = await axios.get('/api/stationConfiguration/stations');
                set({ data: response.data });
            } catch (error) {
                console.log('Error fetching data: ', error);
            } finally {
                set({loading: false});
            }
        }
    },

    persist: async () => {
        set({ loading: true });
        try {
            const { data } = useStationStore.getState();  // Accessing the current state
            if (data) {
                const response = await fetch('/api/stationConfiguration/stations', {
                    method: 'POST',  // or 'PUT' depending on your API
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (!response.ok) {
                    throw new Error('Failed to persist data');
                }
            }
        } catch (error) {
            console.log('Error persisting data: ', error);
        } finally {
            set({loading: false});
        }
    },

    updateData: (newData: Station[]) => {
        set({ data: newData });
    },
}));

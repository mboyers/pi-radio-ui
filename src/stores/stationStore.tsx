import { create } from 'zustand';
import axios from "axios";

type Station = {
    dialPosition: number;
    name: string;
    uri: string;
};

type State = {
    stations: Station[] | [];
    loading: boolean;
    fetchStations: () => Promise<void>;
    updateStations: (newData: Station[]) => void;
    persistStations: () => Promise<void>;
};

export const useStationStore = create<State>((set, get) => ({
    stations: [],
    loading: false,

    fetchStations: async () => {
        if (!get().loading) {
            set({ loading: true });
            try {
                const response = await axios.get('/api/stationConfiguration/stations');
                set({ stations: response.data });
            } catch (error) {
                console.log('Error fetching data: ', error);
            } finally {
                set({loading: false});
            }
        }
    },

    persistStations: async () => {
        set({ loading: true });
        try {
            const { stations } = useStationStore.getState();  // Accessing the current state
            if (stations) {
                const response = await fetch('/api/stationConfiguration/stations', {
                    method: 'POST',  // or 'PUT' depending on your API
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(stations),
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

    updateStations: (incomingStations: Station[]) => {
        set({ stations: incomingStations });
    },
}));

import { create } from 'zustand';
import api from "../service/Api";

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
                const response = await api.get('/api/stationConfiguration/stations');
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
            const { stations } = useStationStore.getState();
            if (stations) {
                await api({method: 'put', url: '/api/stationConfiguration/stations', data: stations});
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

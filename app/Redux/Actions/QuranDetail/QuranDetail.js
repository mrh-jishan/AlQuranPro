import axios from 'axios';
import { Constants } from '../../../Utils/Constants';
import { quranDetail } from '../../../Utils/EndPoints';
import { REQ_QURAN_DETAIL, REQ_QURAN_DETAIL_FAILURE, REQ_QURAN_DETAIL_SUCCESS } from '../Types';

const getDetailQuran = payload => async dispatch => {
  const { id, count_ayat } = payload;
  dispatch({ type: REQ_QURAN_DETAIL });
  try {
    const response = await axios.get(quranDetail(id, count_ayat));
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_QURAN_DETAIL_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: REQ_QURAN_DETAIL_FAILURE,
        error: 'Request Detail Surah gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_QURAN_DETAIL_FAILURE,
      error: 'Request Detail Surah gagal',
    });
  }
};

export { getDetailQuran };

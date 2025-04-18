import { LineDataType } from './components/linechart/index.types';
import { PieDataType } from './components/piechart/index.types';
import { NationPopulationResponseApi } from './dashboard.types';

const chartDataNormzalizer = (raw: NationPopulationResponseApi) => {
  const { data, source = [] } = raw;

  const sortedData = data.sort((a, b) => {
    const yearA = parseInt(a.Year, 10);
    const yearB = parseInt(b.Year, 10);
    return yearA - yearB;
  });
  
  const dataSource = sortedData.map((item) => ({
    idNation: item['ID Nation'],
    idYear: item['ID Year'],
    nation: item.Nation,
    year: item.Year,
    population: item.Population,
    slugNation: item['Slug Nation'],
  }));

  const { annotations } = source[0] || {};
  const {
    dataset_link,
    dataset_name,
    source_description,
    source_name,
    table_id,
    subtopic,
    topic,
  } = annotations || {};

  const pieData: PieDataType[] = dataSource.map((item) => ({
    name: item.year,
    value: item.population,
  }));
  
  const lineData: LineDataType = dataSource.map((item) => {
    return [item.year, item.population];
  });

  return {
    pieData,
    lineData,
    annotations: {
      datasetLink: dataset_link,
      datasetName: dataset_name,
      sourceDescription: source_description,
      sourceName: source_name,
      tableId: table_id,
      topic,
      subtopic,
    },
    data: dataSource,
  };
};

export default chartDataNormzalizer;

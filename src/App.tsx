import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import { EmptyState, Input, SortDirection, Table, Link } from 'vienna-ui';

interface Response {
  docs: DocsData[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

interface DocsData {
  _id: string;
  name: string | null;
  wikiUrl: string | null;
  race: string | null;
  birth: string | null;
  gender: string | null;
  death: string | null;
  hair: string | null;
  height: string | null;
  realm: string | null;
  spouse: string | null;
}

interface TableRows {
  id: string;
  uuid: string;
  name: string;
  gender: string;
  race: string;
  realm: string;
  spouse: string;
  hair: string;
  height: string;
  birth: string;
  death: string;
  wikiUrl: string;
}

export default function App() {
  const [responseData, setResponseData] = useState<TableRows[]>([]);
  const [tableRows, setTableRows] = useState<TableRows[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const token = 'Y_NbE4mEPuopcu02IlaF';
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(
        'https://the-one-api.dev/v2/character?sort=name:asc&limit=300',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: Response = await response.json();

      const responseItems = data.docs.map((item, id) => {
        return {
          id: String(id + 1),
          uuid: item._id,
          name: item.name ?? '-',
          gender: item.gender ?? '-',
          race: item.race ?? '-',
          realm: item.realm ?? '-',
          spouse: item.spouse ?? '-',
          hair: item.hair ?? '-',
          height: item.height ?? '-',
          birth: item.birth ?? '-',
          death: item.death ?? '-',
          wikiUrl: item.wikiUrl ?? '-',
        };
      });
      setResponseData(responseItems);
    } catch (err) {
      setIsError(true);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSort = (
    _event?: FormEvent,
    data?: { field: string; direction: SortDirection }
  ) => {
    if (data) {
      const dir = data.direction === 'desc' ? 1 : -1;
      const newData = [...tableRows].sort((a, b) => {
        const nameA = a[data.field as keyof TableRows].toUpperCase();
        const nameB = b[data.field as keyof TableRows].toUpperCase();
        const result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        return result * dir;
      });
      setTableRows(newData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const results = responseData.filter((item) => {
      const lenSerchValue = searchValue.length;
      const itemValue = item.name.toLowerCase().slice(0, lenSerchValue);
      return searchValue === itemValue;
    });

    setTableRows(results);
  }, [searchValue, responseData]);

  return (
    <>
      <Input
        style={{ maxWidth: '250px' }}
        size={'m'}
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Table
        data={tableRows}
        onSort={onSort}
        sort={{ field: 'name', direction: 'desc' }}
        // maxHeight="800px"
      >
        <Table.Column id="id" title="#">
          {(data) => data.id}
        </Table.Column>
        <Table.Column id="name" title="Имя" sortable>
          {(data) => data.name}
        </Table.Column>
        <Table.Column id="gender" title="Пол" align="center">
          {(data) => data.gender}
        </Table.Column>
        <Table.Column id="race" title="Раса">
          {(data) => data.race}
        </Table.Column>
        <Table.Column id="realm" title="Королевство">
          {(data) => data.realm}
        </Table.Column>
        <Table.Column id="spouse" title="Супруг(а)">
          {(data) => data.spouse}
        </Table.Column>
        <Table.Column id="wikiUrl" title="Ссылка" align="center">
          {(data) => {
            if (data.wikiUrl === '-') {
              return data.wikiUrl;
            } else {
              return (
                <Link target="_blank" href={data.wikiUrl}>
                  Link to wiki
                </Link>
              );
            }
          }}
        </Table.Column>

        {tableRows.length === 0 && isLoading && (
          <EmptyState loading>
            <EmptyState.Title>Загружаем данные</EmptyState.Title>
            <EmptyState.Description>
              Загружаем данные таблицы, очень скоро они будут готовы.
            </EmptyState.Description>
          </EmptyState>
        )}
        {tableRows.length === 0 && !isLoading && (
          <EmptyState>
            <EmptyState.Title>Нет данных</EmptyState.Title>
            <EmptyState.Description>
              По вашему запросу ничего не найдено.
            </EmptyState.Description>
          </EmptyState>
        )}
        {tableRows.length === 0 && isError && (
          <EmptyState>
            <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
            <EmptyState.Description>
              Что-то пошло не так. Возможно был превышен лимит запросов
            </EmptyState.Description>
          </EmptyState>
        )}
      </Table>
    </>
  );
}

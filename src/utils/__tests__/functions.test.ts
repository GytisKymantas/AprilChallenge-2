import { SortDirection } from '../constants';
import { sortServers } from '../functions';


describe('sortServers function', () => {
  const TestServers = [
    { name: 'Server A', distance: '33' },
    { name: 'Server B', distance: '43' },
    { name: 'Server C', distance: '53' },
  ];

  it('sorts servers by name in ascending order', () => {
    const order = { name: SortDirection.ASCENDING, distance: null };

    const sortedServers = sortServers(order, 'name', TestServers);
    expect(sortedServers).toEqual([
      { name: 'Server A', distance: '33' },
      { name: 'Server B', distance: '43' },
      { name: 'Server C', distance: '53' },
    ]);
  });

  it('sorts servers by distance in ascending order', () => {
    const order = { name: null, distance: SortDirection.ASCENDING };
    const sortedServers = sortServers(order, 'name', TestServers);

    expect(sortedServers).toEqual([
      { name: 'Server C', distance: '53' },
      { name: 'Server B', distance: '43' },
      { name: 'Server A', distance: '33' },
    ]);
  });

 
});

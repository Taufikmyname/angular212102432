import { Component, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=1a6ee471eb614d2a9000906ab1e0e159';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log(' SGD : ' + sgd2);
      var row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log(' BND : ' + bnd2);
      var row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log(' HKD : ' + hkd);
      var row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc);
      var row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, 'en-US', '', 'JPY');
      console.log('JPY: ' + jpy2);
      var row = [6, 'JPY', jpy2];
      this._table1.row.add(row);

      var eur = rates.IDR / rates.EUR;
      var eur2 = formatCurrency(eur, 'en-US', '', 'EUR');
      console.log('EUR: ' + eur2);
      var row = [7, 'EUR', eur2];
      this._table1.row.add(row);

      var rub = rates.IDR / rates.RUB;
      var rub2 = formatCurrency(rub, 'en-US', '', 'RUB');
      console.log('RUB: ' + rub2);
      var row = [8, 'RUB', rub2];
      this._table1.row.add(row);

      var cad = rates.IDR / rates.CAD;
      var cad2 = formatCurrency(cad, 'en-US', '', 'CAD');
      console.log('CAD: ' + cad2);
      var row = [9, 'CAD', cad2];
      this._table1.row.add(row);

      var myr = rates.IDR / rates.MYR;
      var myr2 = formatCurrency(myr, 'en-US', '', 'MYR');
      console.log('MYR: ' + myr2);
      var row = [10, 'MYR', myr2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}

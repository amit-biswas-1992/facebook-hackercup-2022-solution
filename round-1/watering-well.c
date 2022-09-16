#include <iostream>
#include <vector>
using namespace std ;
using ll = long long ;
const ll MOD = 1000000007 ;
int main() {
   int K ;
   cin >> K ;
   for (int kase=1; kase<=K; kase++) {
      ll n, q ;
      cin >> n ;
      ll tx=0, ty=0, txx=0, tyy=0 ;
      ll a, b ;
      for (int i=0; i<n; i++) {
         cin >> a >> b ;
         tx = (tx + a) % MOD ;
         txx = (txx + a * a) % MOD ;
         ty = (ty + b) % MOD ;
         tyy = (tyy + b * b) % MOD ;
      }
      cin >> q ;
      ll s = 0 ;
      for (int i=0; i<q; i++) {
         cin >> a >> b ;
         ll xv = (a * a % MOD * n + txx - 2 * a * tx) % MOD ;
         ll yv = (b * b % MOD * n + tyy - 2 * b * ty) % MOD ;
         s = (s + xv + yv) % MOD ;
         s = (s + MOD) % MOD ;
      }
      cout << "Case #" << kase << ": " << s << endl ;
   }
}
